import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import AuthCard, { AuthCardContent } from "@/components/ui/auth-card";
import { CardTitle } from "@/components/ui/card";
import { User, Lock } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular login bem-sucedido
    localStorage.setItem("isAuthenticated", "true");
    navigate("/");
  };

  return (
    <AuthCard>
      <CardTitle className="text-2xl font-bold text-center text-primary">
        Entrar
      </CardTitle>
      
      <AuthCardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Usuário</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                id="email"
                type="email"
                placeholder="Insira seu usuário..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                id="password"
                type="password"
                placeholder="Insira sua senha..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <Label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Lembrar de mim
            </Label>
          </div>
          
          <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
            Avançar
          </Button>
          
          <div className="text-center space-y-2">
            <Link 
              to="/recuperar-senha" 
              className="text-sm text-primary hover:text-primary-hover transition-colors"
            >
              Esqueceu a senha?
            </Link>
            <p className="text-sm text-muted-foreground">
              Não tem conta?{" "}
              <Link 
                to="/cadastro" 
                className="text-primary hover:text-primary-hover transition-colors"
              >
                Cadastre-se
              </Link>
            </p>
          </div>
        </form>
      </AuthCardContent>
    </AuthCard>
  );
}