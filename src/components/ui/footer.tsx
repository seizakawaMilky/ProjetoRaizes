import { Link } from "react-router-dom";

interface FooterProps {
  variant?: "simple" | "complete";
}

export default function Footer({ variant = "simple" }: FooterProps) {
  if (variant === "simple") {
    return (
      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-primary mb-4">Contato</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: contato@voluntario.org</p>
              <p>Telefone: (47) 9999-9999</p>
              <p>Endereço: Joinville, SC</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre o projeto</h3>
            <p className="text-sm opacity-90">
              Conectando conhecimento a quem mais precisa através da união entre 
              professores voluntários e ONGs educacionais.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre-o-projeto" className="opacity-90 hover:opacity-100 transition-opacity">
                  Sobre o Projeto
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="opacity-90 hover:opacity-100 transition-opacity">
                  Como Funciona?
                </Link>
              </li>
              <li>
                <Link to="/ongs-parceiras" className="opacity-90 hover:opacity-100 transition-opacity">
                  ONGs Parceiras
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-sm opacity-90">
              <p>Email: contato@voluntarios.org</p>
              <p>Telefone: (47) 9999-9999</p>
              <p>Endereço: Joinville, SC</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 Voluntários do Conhecimento. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}