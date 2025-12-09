import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Globe, Mail, Lock, User, Sparkles, Star } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/");
      }
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (error) throw error;

        toast({
          title: "Success!",
          description: "You have successfully logged in.",
        });
        navigate("/");
      } else {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: {
              name: formData.name,
              age: formData.age ? parseInt(formData.age) : null,
            },
          },
        });

        if (error) throw error;

        toast({
          title: "Account created!",
          description: "You can now log in with your credentials.",
        });
        setIsLogin(true);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex overflow-hidden relative bg-gradient-to-br from-[#0f0a1e] via-[#1a1040] to-[#0d1530]">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
        {/* Shooting stars */}
        <div className="absolute top-20 right-40 w-20 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rotate-45 animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rotate-45 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Left side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12">
        {/* Large planet */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#4a9eff] via-[#7c3aed] to-[#2563eb] shadow-2xl shadow-blue-500/30 animate-float">
          <div className="absolute inset-4 rounded-full bg-gradient-to-tl from-transparent via-white/10 to-white/20" />
          <div className="absolute top-8 left-12 w-16 h-8 rounded-full bg-white/10 blur-sm" />
        </div>
        
        {/* Medium planet */}
        <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#c084fc] via-[#a855f7] to-[#7c3aed] shadow-xl shadow-purple-500/30 animate-float" style={{ animationDelay: '1s' }}>
          <div className="absolute inset-2 rounded-full bg-gradient-to-tl from-transparent via-white/10 to-white/20" />
        </div>
        
        {/* Small planet */}
        <div className="absolute top-1/2 right-40 w-20 h-20 rounded-full bg-gradient-to-br from-[#f472b6] via-[#ec4899] to-[#db2777] shadow-lg shadow-pink-500/30 animate-float" style={{ animationDelay: '2s' }}>
          <div className="absolute inset-1 rounded-full bg-gradient-to-tl from-transparent via-white/10 to-white/20" />
        </div>

        {/* Ring around planet */}
        <div className="absolute top-20 left-20 w-64 h-64 flex items-center justify-center">
          <div className="w-80 h-12 border-2 border-white/20 rounded-full rotate-[-20deg] transform" />
        </div>

        {/* Adventure text */}
        <div className="absolute bottom-20 left-12 text-left z-10">
          <h2 className="text-4xl font-bold text-white mb-2">
            SIGN IN TO YOUR
          </h2>
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f472b6] bg-clip-text text-transparent">
            ADVENTURE!
          </h2>
          <div className="flex gap-2 mt-4">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            <Star className="w-5 h-5 text-yellow-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Logo */}
        <div className="absolute top-8 left-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#a855f7] to-[#7c3aed] flex items-center justify-center">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Qgen</span>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Qgen</span>
          </div>

          <h1 className="text-4xl font-bold text-white text-center mb-2">
            {isLogin ? "SIGN IN" : "SIGN UP"}
          </h1>
          <p className="text-white/60 text-center mb-8">
            {isLogin ? "Sign in with email address" : "Create your adventure account"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl focus:border-purple-500 focus:ring-purple-500/20 transition-all"
                  />
                </div>
                <div className="relative">
                  <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                    placeholder="Your age (optional)"
                    min="1"
                    max="150"
                    className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl focus:border-purple-500 focus:ring-purple-500/20 transition-all"
                  />
                </div>
              </>
            )}

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Yourname@gmail.com"
                className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl focus:border-purple-500 focus:ring-purple-500/20 transition-all"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Password"
                minLength={6}
                className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl focus:border-purple-500 focus:ring-purple-500/20 transition-all"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#c084fc] hover:from-[#6d28d9] hover:via-[#9333ea] hover:to-[#a855f7] shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/40" 
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Loading...
                </span>
              ) : (
                isLogin ? "Sign in" : "Sign up"
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/60">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#a855f7] font-semibold hover:text-[#c084fc] transition-colors hover:underline"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>

          {/* Decorative elements for mobile */}
          <div className="lg:hidden mt-8 text-center">
            <p className="text-2xl font-bold text-white/80">Start Your</p>
            <p className="text-3xl font-extrabold bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f472b6] bg-clip-text text-transparent">
              ADVENTURE!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
