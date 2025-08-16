import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthCard, { AuthCardContent } from "@/components/ui/auth-card";
import { CardTitle } from "@/components/ui/card";
import { Mail, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function RecuperarSenha() {
  const [step, setStep] = useState<"request" | "verify">("request");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRequestCode = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio de código
    toast({
      title: "Código enviado!",
      description: "Verifique sua caixa de entrada.",
    });
    
    setStep("verify");
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (code === "123456") {
      toast({
        title: "Código válido!",
        description: "Redirecionando para redefinir senha...",
      });
      
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      toast({
        title: "Código inválido",
        description: "Verifique o código e tente novamente.",
        variant: "destructive"
      });
    }
  };

  if (step === "request") {
    return (
      <AuthCard>
        <CardTitle className="text-2xl font-bold text-center text-primary">
          Esqueceu a senha?
        </CardTitle>
        
        <AuthCardContent>
          <p className="text-sm text-muted-foreground text-center mb-4">
            Enviaremos um código no seu e-mail para você criar uma nova senha.
          </p>
          
          <form onSubmit={handleRequestCode} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Insira seu email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
              Recuperar senha
            </Button>
            
            <div className="text-center">
              <Link 
                to="/login" 
                className="text-sm text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-1"
              >
                <ArrowLeft className="h-3 w-3" />
                Voltar para o login
              </Link>
            </div>
          </form>
        </AuthCardContent>
      </AuthCard>
    );
  }

  return (
    <AuthCard>
      <CardTitle className="text-2xl font-bold text-center text-primary">
        Verifique sua caixa de entrada!
      </CardTitle>
      
      <AuthCardContent>
        <p className="text-sm text-muted-foreground text-center mb-4">
          Enviamos um código de verificação para <strong>{email}</strong>. 
          Digite o código abaixo para continuar.
        </p>
        
        <form onSubmit={handleVerifyCode} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="code">Código de Verificação</Label>
            <Input
              id="code"
              type="text"
              placeholder="Digite seu código..."
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="text-center text-lg tracking-widest"
              maxLength={6}
              required
            />
            <p className="text-xs text-muted-foreground text-center">
              Código de exemplo: 123456
            </p>
          </div>
          
          <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
            Enviar
          </Button>
          
          <div className="text-center">
            <Link 
              to="/login" 
              className="text-sm text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-1"
            >
              <ArrowLeft className="h-3 w-3" />
              Voltar para o login
            </Link>
          </div>
        </form>
      </AuthCardContent>
    </AuthCard>
  );
}