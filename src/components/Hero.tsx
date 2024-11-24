import { Building, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
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
            Servicios Profesionales de Vaciado y Limpieza Industrial
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8">
            Expertos en vaciado y limpieza de naves industriales en Barcelona
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-white">
              <Building className="w-5 h-5" />
              <span>Servicio 24/7</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <MapPin className="w-5 h-5" />
              <span>Barcelona y área metropolitana</span>
            </div>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
            Solicitar Presupuesto Gratuito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;