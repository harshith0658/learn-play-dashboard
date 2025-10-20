import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, BookOpen, CheckCircle, Lock, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Lessons = () => {
  const navigate = useNavigate();

  const lessons = [
    {
      id: 1,
      title: "Introduction to Geography",
      description: "Learn the basics of world geography and map reading",
      duration: "15 min",
      status: "completed",
      icon: BookOpen,
      locked: false
    },
    {
      id: 2,
      title: "Continents and Oceans",
      description: "Explore the seven continents and five oceans",
      duration: "20 min",
      status: "completed",
      icon: BookOpen,
      locked: false
    },
    {
      id: 3,
      title: "Countries and Capitals",
      description: "Discover countries around the world and their capitals",
      duration: "25 min",
      status: "unlocked",
      icon: BookOpen,
      locked: false
    },
    {
      id: 4,
      title: "Climate Zones",
      description: "Understanding different climate regions",
      duration: "18 min",
      status: "unlocked",
      icon: BookOpen,
      locked: false
    },
    {
      id: 5,
      title: "World Landmarks",
      description: "Famous landmarks and monuments worldwide",
      duration: "22 min",
      status: "locked",
      icon: BookOpen,
      locked: true
    },
    {
      id: 6,
      title: "Natural Wonders",
      description: "Explore Earth's most amazing natural formations",
      duration: "20 min",
      status: "locked",
      icon: BookOpen,
      locked: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/")}
            className="hover:scale-110 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Lesson Videos</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8 animate-slide-up">
          <h2 className="text-3xl font-bold mb-2">Continue Your Learning Journey</h2>
          <p className="text-muted-foreground">Watch lessons and take quizzes to earn rewards</p>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => {
            const Icon = lesson.icon;
            const isCompleted = lesson.status === "completed";
            const isLocked = lesson.locked;

            return (
              <Card 
                key={lesson.id} 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    {isCompleted && (
                      <Badge className="bg-accent text-accent-foreground">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Completed
                      </Badge>
                    )}
                    {isLocked && (
                      <Badge variant="secondary">
                        <Lock className="w-3 h-3 mr-1" />
                        Locked
                      </Badge>
                    )}
                    {!isCompleted && !isLocked && (
                      <Badge variant="outline" className="border-primary text-primary">
                        Unlocked
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {lesson.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {lesson.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{lesson.duration}</span>
                  </div>

                  <div className="flex gap-2">
                    {isCompleted ? (
                      <>
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          disabled={isLocked}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Replay
                        </Button>
                        <Button 
                          className="flex-1 bg-primary hover:bg-primary/90"
                          disabled={isLocked}
                        >
                          Take Quiz
                        </Button>
                      </>
                    ) : (
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={isLocked}
                      >
                        {isLocked ? (
                          <>
                            <Lock className="w-4 h-4 mr-2" />
                            Locked
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Play Lesson
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Lessons;
