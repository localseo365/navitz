import { Warehouse, Brush, Recycle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: <Warehouse className="w-12 h-12 text-primary" />,
      title: "Vaciado Completo de Naves Industriales",
      description: "Servicio integral de vaciado de naves industriales, incluyendo desmontaje y retirada de equipamiento industrial.",
    },
    {
      icon: <Brush className="w-12 h-12 text-primary" />,
      title: "Limpieza Industrial Profesional",
      description: "Servicios especializados de limpieza industrial con equipos profesionales y productos específicos para cada superficie.",
    },
    {
      icon: <Recycle className="w-12 h-12 text-primary" />,
      title: "Gestión de Residuos y Reciclaje",
      description: "Gestión responsable y sostenible de residuos industriales, garantizando el correcto reciclaje y disposición de materiales.",
    },
  ];

  return (
    <section id="servicios" className="py-16 sm:py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-accent">
                <p className="text-sm sm:text-base">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;