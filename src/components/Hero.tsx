import { Building, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const phoneNumber = "34633759649";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div 
      className="min-h-[80vh] flex items-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625")',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Vaciado y Limpieza de Naves Industriales en Barcelona | NAVITZ
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8">
            Servicio profesional de vaciado, limpieza y gestión de residuos industriales. Más de 10 años de experiencia garantizando resultados excepcionales en toda el área metropolitana de Barcelona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-white">
              <Building className="w-5 h-5" />
              <span>Servicio 24/7 - 365 días</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <MapPin className="w-5 h-5" />
              <span>Barcelona y área metropolitana</span>
            </div>
          </div>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
              Solicitar Presupuesto Gratuito
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;