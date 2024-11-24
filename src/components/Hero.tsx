import { Building, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="min-h-[80vh] flex items-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
            Servicios Profesionales de Vaciado y Limpieza Industrial
          </h1>
          <p className="text-xl md:text-2xl text-accent mb-8">
            Expertos en vaciado y limpieza de naves industriales en Barcelona
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-primary">
              <Building className="w-5 h-5" />
              <span>Servicio 24/7</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="w-5 h-5" />
              <span>Barcelona y área metropolitana</span>
            </div>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Solicitar Presupuesto Gratuito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;