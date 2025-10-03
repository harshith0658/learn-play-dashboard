import { 
  Coins, 
  Award, 
  Zap, 
  BookOpen, 
  Globe, 
  Search, 
  HelpCircle, 
  Lightbulb,
  Sprout,
  TreeDeciduous,
  Settings as SettingsIcon,
  Store
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header Bar */}
      <header className="bg-card border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Globe className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">EcoQuest</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-accent" />
            <span className="font-semibold">80 Coins</span>
          </div>
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-muted-foreground" />
            <span className="font-semibold">80 Coins</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-accent" />
            <span className="font-semibold">8 Badges</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent" />
            <span className="font-semibold">300 XP</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="default" className="bg-primary">Logout</Button>
          <Button variant="outline">View Collection</Button>
        </div>
      </header>

      {/* Main Content Area with Nature Background */}
      <main className="flex-1 relative overflow-hidden bg-gradient-to-b from-[hsl(190,70,85)] to-[hsl(145,50,65)]">
        {/* Cloud decorations */}
        <div className="absolute top-8 left-20 w-32 h-16 bg-white/70 rounded-full blur-sm"></div>
        <div className="absolute top-12 right-32 w-40 h-20 bg-white/60 rounded-full blur-sm"></div>
        <div className="absolute top-20 left-1/2 w-36 h-18 bg-white/50 rounded-full blur-sm"></div>

        {/* Main Content Container */}
        <div className="relative z-10 px-8 py-8">
          {/* Logo and Stats Row */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Globe className="w-12 h-12 text-primary-foreground" />
              </div>
              <h1 className="text-5xl font-bold text-foreground">EcoQuest</h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full flex items-center gap-2 shadow-md">
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold">8 Badges</span>
              </div>
              <div className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full flex items-center gap-2 shadow-md">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">300 XP</span>
              </div>
              <Button className="bg-card text-card-foreground hover:bg-card/90 shadow-md">
                View Profile
              </Button>
            </div>
          </div>

          {/* Main Action Buttons */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Lessons Button */}
            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-[3rem] px-8 py-8 shadow-2xl transition-transform hover:scale-105 flex items-center justify-between relative overflow-hidden">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Globe className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h2 className="text-3xl font-bold">LESSONS</h2>
                  <p className="text-lg opacity-90">- Explore New Topics</p>
                </div>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-accent-foreground" />
              </div>
            </button>

            {/* Quizzes Button */}
            <button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-[3rem] px-8 py-8 shadow-2xl transition-transform hover:scale-105 flex items-center justify-between relative overflow-hidden">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
                  <Search className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h2 className="text-3xl font-bold">Quizzes</h2>
                  <p className="text-lg opacity-90">- Test Your Knowledge</p>
                </div>
              </div>
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                <HelpCircle className="w-10 h-10 text-accent" />
              </div>
            </button>

            {/* Daily Eco Tip Button */}
            <button className="w-full bg-card hover:bg-card/90 text-card-foreground rounded-[3rem] px-8 py-6 shadow-2xl transition-transform hover:scale-105">
              <h2 className="text-2xl font-bold flex items-center justify-center gap-3">
                <Lightbulb className="w-6 h-6" />
                Daily Eco Tip
              </h2>
            </button>
          </div>
        </div>

        {/* Nature elements decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[hsl(140,60,40)] to-transparent"></div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-gradient-to-t from-[hsl(140,50,35)] to-[hsl(140,55,40)] px-8 py-6">
        <div className="max-w-2xl mx-auto flex justify-around items-center">
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 rounded-full bg-card shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sprout className="w-8 h-8 text-primary" />
            </div>
            <span className="text-sm font-semibold text-card">Home</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 rounded-full bg-card shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <TreeDeciduous className="w-8 h-8 text-primary" />
            </div>
            <span className="text-sm font-semibold text-card">Profile</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 rounded-full bg-card shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <SettingsIcon className="w-8 h-8 text-primary" />
            </div>
            <span className="text-sm font-semibold text-card">Achievements</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 rounded-full bg-card shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Store className="w-8 h-8 text-primary" />
            </div>
            <span className="text-sm font-semibold text-card">Store</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Index;
