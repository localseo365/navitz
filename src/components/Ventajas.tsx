import { Clock, PiggyBank, Leaf } from "lucide-react";

const Ventajas = () => {
  const advantages = [
    {
      icon: <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Respuesta Inmediata",
      description: "Servicio disponible 24/7 con respuesta en menos de 2 horas. Nos adaptamos a sus necesidades y horarios para minimizar el impacto en su actividad empresarial.",
    },
    {
      icon: <PiggyBank className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Precios Competitivos",
      description: "Presupuestos transparentes y ajustados al mercado, sin costes ocultos. Ofrecemos la mejor relación calidad-precio en servicios de vaciado y limpieza industrial en Barcelona.",
    },
    {
      icon: <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Compromiso Ambiental",
      description: "Gestión sostenible de residuos y uso de productos ecológicos certificados. Cumplimos con todas las normativas medioambientales vigentes y proporcionamos certificados de gestión.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          Ventajas de Contratar Nuestros Servicios
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="text-center p-4 sm:p-6 rounded-lg hover:shadow-xl transition-shadow animate-fade-in"
            >
              <div className="flex justify-center">{advantage.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-secondary">
                {advantage.title}
              </h3>
              <p className="text-sm sm:text-base text-accent">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventajas;