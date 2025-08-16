import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import heroImage from "@/assets/hero-fist-bump.jpg";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleVolunteerClick = () => {
    if (isAuthenticated) {
      navigate("/ongs-parceiras");
    } else {
      navigate("/cadastro");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={isAuthenticated} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Conectando conhecimento a quem mais precisa.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Uma plataforma que une professores voluntários a ONGs educacionais,
                criando oportunidades de aprendizado e crescimento para comunidades
                que mais precisam de apoio educacional.
              </p>

              <Button
                onClick={handleVolunteerClick}
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 text-lg"
              >
                Quero ser voluntário
               </Button>
            </div>

            <div className="flex justify-center">
              <img
                src={heroImage}
                alt="Pessoas unindo as mãos em um fist bump, representando união e colaboração"
                className="max-w-full h-auto rounded-lg shadow-card"
              />
            </div>
          </div>
        </section>

        {/* Informações adicionais para usuários logados */}
        {isAuthenticated && (
          <section className="bg-accent py-16">
            <div className="container mx-auto px-4">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold text-primary">
                  Bem-vindo de volta!
                </h2>
                <p className="text-lg text-accent-foreground max-w-2xl mx-auto">
                  Explore nossas ONGs parceiras e descubra como você pode fazer a diferença
                  na vida de muitas pessoas através da educação.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={() => navigate("/ongs-parceiras")}
                    variant="outline"
                    size="lg"
                  >
                    Ver ONGs Parceiras
                  </Button>
                  <Button
                    onClick={() => navigate("/como-funciona")}
                    variant="outline"
                    size="lg"
                  >
                    Como Funciona?
                  </Button>
                </div>
              </div>
            </div>
          </section> 
        )}
      </main>

      <Footer variant={isAuthenticated ? "complete" : "simple"} />
    </div>
  );
}