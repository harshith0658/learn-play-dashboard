import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Trash2, Droplets, TreePine, Gamepad2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MiniGames = () => {
  const navigate = useNavigate();

  const games = [
    {
      id: 1,
      title: "Trash Sorter",
      description: "Sort trash into bins by dragging",
      icon: Trash2,
      bgColor: "from-emerald-600/20 to-teal-600/20",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]"
    },
    {
      id: 2,
      title: "Let's Clean the River",
      description: "Match eco-friendly pairs",
      icon: Droplets,
      bgColor: "from-blue-600/20 to-cyan-600/20",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
    },
    {
      id: 3,
      title: "Park Cleanup",
      description: "Clean up the park",
      icon: TreePine,
      bgColor: "from-green-600/20 to-lime-600/20",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Header */}
      <header className="bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/")}
            className="hover:scale-110 transition-transform hover:bg-gray-800"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Mini Games</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8 animate-slide-up">
          <h2 className="text-3xl font-bold mb-2 text-white">Choose Your Game</h2>
          <p className="text-gray-400">Have fun while learning about the environment</p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => {
            const Icon = game.icon;

            return (
              <Card 
                key={game.id}
                className={`group bg-gradient-to-br ${game.bgColor} backdrop-blur-sm border-2 border-gray-700 hover:border-purple-500 transition-all duration-500 hover:scale-105 animate-slide-up ${game.glowColor} cursor-pointer overflow-hidden`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-purple-500/50">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                    {game.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base">
                    {game.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-6">
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110"
                  >
                    Play
                  </Button>
                </CardContent>

                {/* Glow effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/0 via-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:via-purple-600/5 transition-all duration-500 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="fixed top-20 left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="fixed bottom-20 right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="fixed top-1/2 left-1/4 w-24 h-24 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-500" />
      </main>
    </div>
  );
};

export default MiniGames;
