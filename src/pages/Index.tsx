import { Trophy, Coins, Star, BookOpen, FileQuestion, Gamepad2, Home, User, Heart, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Index = () => {
  const xpLevel = 5;
  const xpProgress = 65;
  const coinCount = 1250;
  const badges = [
    { id: 1, icon: Trophy, name: "First Win" },
    { id: 2, icon: Star, name: "Quick Learner" },
    { id: 3, icon: BookOpen, name: "Book Worm" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Dashboard Section */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-6 rounded-b-3xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>
        
        {/* XP Level */}
        <Card className="bg-card/95 backdrop-blur p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-card-foreground">Level {xpLevel}</span>
            <span className="text-sm text-muted-foreground">{xpProgress}% to next level</span>
          </div>
          <Progress value={xpProgress} className="h-3" />
        </Card>

        {/* Coins & Badges Row */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-card/95 backdrop-blur p-4">
            <div className="flex items-center gap-3">
              <div className="bg-accent/20 p-3 rounded-full">
                <Coins className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Coins</p>
                <p className="text-2xl font-bold text-card-foreground">{coinCount}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-card/95 backdrop-blur p-4">
            <div className="flex items-center gap-3">
              <div className="bg-secondary/50 p-3 rounded-full">
                <Trophy className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Badges</p>
                <div className="flex gap-1 mt-1">
                  {badges.map((badge) => (
                    <Badge key={badge.id} variant="secondary" className="p-1">
                      <badge.icon className="w-3 h-3" />
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Main Action Buttons */}
      <div className="px-6 py-8 space-y-4">
        <Button
          className="w-full h-24 text-lg font-semibold flex items-center justify-start gap-4 bg-primary hover:bg-primary/90"
          size="lg"
        >
          <div className="bg-primary-foreground/20 p-4 rounded-2xl">
            <BookOpen className="w-8 h-8" />
          </div>
          <span>Lessons</span>
        </Button>

        <Button
          className="w-full h-24 text-lg font-semibold flex items-center justify-start gap-4 bg-secondary hover:bg-secondary/80"
          variant="secondary"
          size="lg"
        >
          <div className="bg-secondary-foreground/10 p-4 rounded-2xl">
            <FileQuestion className="w-8 h-8" />
          </div>
          <span>Quizzes</span>
        </Button>

        <Button
          className="w-full h-24 text-lg font-semibold flex items-center justify-start gap-4 bg-accent hover:bg-accent/90"
          size="lg"
        >
          <div className="bg-accent-foreground/20 p-4 rounded-2xl">
            <Gamepad2 className="w-8 h-8" />
          </div>
          <span>Mini Games</span>
        </Button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="flex justify-around items-center h-16 px-4">
          <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2">
            <Home className="w-5 h-5 text-primary" />
            <span className="text-xs font-medium text-primary">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2">
            <User className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2">
            <Heart className="w-5 h-5" />
            <span className="text-xs">Favorites</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2">
            <Settings className="w-5 h-5" />
            <span className="text-xs">Settings</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
