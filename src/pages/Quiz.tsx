import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle, Coins } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Quiz = () => {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completing, setCompleting] = useState(false);

  // Sample quiz questions (in real app, these would come from database)
  const questions = [
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: 3
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 2
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correctAnswer: 1
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleCompleteQuiz = async () => {
    setCompleting(true);
    
    try {
      const quizId = lessonId || "general-quiz";
      const { data, error } = await supabase.rpc('complete_quiz', {
        p_quiz_id: quizId
      });

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive"
        });
        return;
      }

      const result = data as { success: boolean; message: string; total_coins?: number };

      if (result.success) {
        toast({
          title: "🎉 Quiz Completed!",
          description: `${result.message} (Total: ${result.total_coins} coins)`
        });
        setTimeout(() => navigate("/lessons"), 2000);
      } else {
        toast({
          title: "Info",
          description: result.message
        });
      }
    } catch (error) {
      console.error('Error completing quiz:', error);
      toast({
        title: "Error",
        description: "Failed to complete quiz. Please try again.",
        variant: "destructive"
      });
    } finally {
      setCompleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/lessons")}
            className="hover:scale-110 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Geography Quiz</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {!showResult ? (
          <Card className="animate-slide-up">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">
                  Question {currentQuestion + 1} of {questions.length}
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  Score: {score}/{currentQuestion}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                      selectedAnswer === index
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 bg-card"
                    }`}
                  >
                    <span className="font-medium">{option}</span>
                  </button>
                ))}
              </div>

              <Button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className="w-full bg-primary hover:bg-primary/90"
              >
                {currentQuestion + 1 === questions.length ? "Finish Quiz" : "Next Question"}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="animate-slide-up text-center">
            <CardHeader>
              <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                {score === questions.length ? (
                  <CheckCircle className="w-16 h-16 text-green-500" />
                ) : (
                  <CheckCircle className="w-16 h-16 text-primary" />
                )}
              </div>

              <div className="space-y-2">
                <p className="text-2xl font-bold">
                  Your Score: {score}/{questions.length}
                </p>
                <p className="text-muted-foreground">
                  {score === questions.length
                    ? "Perfect! You got all questions correct!"
                    : score >= questions.length / 2
                    ? "Great job! Keep learning!"
                    : "Keep practicing!"}
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-600/20 to-amber-600/20 px-6 py-4 rounded-xl border border-yellow-600/50">
                <Coins className="w-6 h-6 text-yellow-400" />
                <span className="text-xl font-bold text-yellow-400">+100 Coins</span>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => navigate("/lessons")}
                  variant="outline"
                  className="flex-1"
                >
                  Back to Lessons
                </Button>
                <Button
                  onClick={handleCompleteQuiz}
                  disabled={completing}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                >
                  {completing ? "Claiming..." : "Claim Reward"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Quiz;
