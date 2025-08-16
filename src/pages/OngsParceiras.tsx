import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { useToast } from "@/hooks/use-toast";

interface ONG {
  id: number;
  name: string;
  description: string;
  tag: string;
  image: string;
}

const ongs: ONG[] = [
  {
    id: 1,
    name: "Projeto Resgate",
    description: "Focada na educação de crianças e adolescentes em situação de vulnerabilidade social, oferecendo apoio escolar e atividades extracurriculares.",
    tag: "Reconhecida em SC",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    name: "Fé e Alegria Resgate",
    description: "Promove educação popular e transformação social através de programas educacionais integrais para comunidades carentes.",
    tag: "Atuação Nacional",
    image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    name: "ONG Raízes",
    description: "Desenvolve projetos educacionais sustentáveis com foco na preservação ambiental e educação para a cidadania.",
    tag: "Sustentabilidade",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop"
  }
];

export default function OngsParceiras() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus !== "true") {
      navigate("/login");
      return;
    }
    setIsAuthenticated(true);
  }, [navigate]);

  const handleVolunteerClick = (ongName: string) => {
    toast({
      title: "Interesse registrado!",
      description: `Obrigado pelo interesse em ser voluntário na ${ongName}. Em breve entraremos em contato.`,
    });
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={true} />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Saiba mais sobre cada ONG
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça nossas organizações parceiras e descubra como seu conhecimento 
            pode transformar vidas através da educação. Cada ONG tem sua especialidade 
            e forma única de impactar positivamente a sociedade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ongs.map((ong) => (
            <Card key={ong.id} className="shadow-card hover:shadow-hover transition-shadow duration-300">
              <CardHeader className="space-y-4">
                <Badge className="w-fit bg-accent text-accent-foreground">
                  {ong.tag}
                </Badge>
                <img 
                  src={ong.image} 
                  alt={`Imagem representativa da ${ong.name}`}
                  className="w-full h-48 object-cover rounded-md"
                />
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardTitle className="text-xl text-primary">
                  {ong.name}
                </CardTitle>
                
                <p className="text-muted-foreground leading-relaxed">
                  {ong.description}
                </p>
                
                <Button 
                  onClick={() => handleVolunteerClick(ong.name)}
                  className="w-full bg-primary hover:bg-primary-hover"
                >
                  Seja um voluntário
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-accent rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Não encontrou a ONG ideal?
            </h2>
            <p className="text-accent-foreground mb-6">
              Estamos sempre expandindo nossa rede de parceiros. Entre em contato 
              conosco para saber sobre novas oportunidades de voluntariado.
            </p>
            <Button variant="outline" size="lg">
              Entrar em contato
            </Button>
          </div>
        </div>
      </main>
      
      <Footer variant="complete" />
    </div>
  );
}