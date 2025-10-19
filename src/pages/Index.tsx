import { 
  Coins, 
  Award, 
  Zap, 
  BookOpen, 
  Globe, 
  Search, 
  HelpCircle, 
  Gamepad2,
  Sprout,
  TreeDeciduous,
  Settings as SettingsIcon,
  Store,
  LogOut
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
          <span className="text-xl font-bold text-foreground">Qgen</span>
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
      <main className="flex-1 relative overflow-hidden bg-gradient-to-b from-[hsl(195,85,75)] via-[hsl(180,70,80)] to-[hsl(145,60,70)]">
        {/* Decorative clouds */}
        <div className="absolute top-4 left-16 w-24 h-12 bg-white/80 rounded-full shadow-sm"></div>
        <div className="absolute top-6 left-24 w-16 h-8 bg-white/70 rounded-full shadow-sm"></div>
        
        <div className="absolute top-8 right-24 w-28 h-14 bg-white/75 rounded-full shadow-sm"></div>
        <div className="absolute top-10 right-32 w-20 h-10 bg-white/65 rounded-full shadow-sm"></div>
        
        <div className="absolute top-16 left-1/3 w-32 h-16 bg-white/70 rounded-full shadow-sm"></div>
        <div className="absolute top-18 left-1/3 ml-8 w-24 h-12 bg-white/60 rounded-full shadow-sm"></div>

        <div className="absolute top-20 right-1/3 w-28 h-14 bg-white/65 rounded-full shadow-sm"></div>
        <div className="absolute top-22 right-1/3 mr-6 w-20 h-10 bg-white/55 rounded-full shadow-sm"></div>

        {/* Floating leaves */}
        <div className="absolute top-32 left-12 w-4 h-4 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-3 h-3 bg-primary/40 rounded-full animate-pulse delay-100"></div>
        <div className="absolute top-72 left-1/4 w-4 h-4 bg-accent/30 rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-96 right-1/3 w-3 h-3 bg-accent/40 rounded-full animate-pulse delay-300"></div>

        {/* Mountain silhouettes */}
        <div className="absolute bottom-32 left-0 w-48 h-48 bg-primary/20 rounded-tl-full"></div>
        <div className="absolute bottom-24 right-0 w-56 h-56 bg-primary/15 rounded-tr-full"></div>
        
        {/* Hills */}
        <div className="absolute bottom-0 left-0 w-full h-64">
          <div className="absolute bottom-0 left-0 w-1/3 h-40 bg-[hsl(140,55,50)] rounded-t-full"></div>
          <div className="absolute bottom-0 left-1/4 w-1/3 h-48 bg-[hsl(145,60,45)] rounded-t-full"></div>
          <div className="absolute bottom-0 right-1/4 w-1/3 h-44 bg-[hsl(142,58,47)] rounded-t-full"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-36 bg-[hsl(138,52,52)] rounded-t-full"></div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 left-8 w-8 h-8 rounded-full bg-accent/20 blur-sm"></div>
        <div className="absolute top-1/3 right-12 w-6 h-6 rounded-full bg-secondary/20 blur-sm"></div>
        <div className="absolute bottom-1/3 left-1/4 w-10 h-10 rounded-full bg-primary/10 blur-sm"></div>

        {/* Main Content Container */}
        <div className="relative z-10 px-8 py-8">
          {/* Logo and Stats Row */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Globe className="w-12 h-12 text-primary-foreground" />
              </div>
              <h1 className="text-5xl font-bold text-foreground">Qgen</h1>
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

            {/* Mini Games Button */}
            <button className="w-full bg-card hover:bg-card/90 text-card-foreground rounded-[3rem] px-8 py-6 shadow-2xl transition-transform hover:scale-105">
              <h2 className="text-2xl font-bold flex items-center justify-center gap-3">
                <Gamepad2 className="w-6 h-6" />
                Mini Games
              </h2>
            </button>
          </div>
        </div>

        {/* Bottom grass layer */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(140,60,35)] via-[hsl(142,58,40)] to-transparent">
          {/* Grass texture effect */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-[hsl(138,65,30)] opacity-40"></div>
        </div>
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
          
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 rounded-full bg-card shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <LogOut className="w-8 h-8 text-primary" />
            </div>
            <span className="text-sm font-semibold text-card">Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Index;
