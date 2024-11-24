import { Clock, PiggyBank, Leaf } from "lucide-react";

const Ventajas = () => {
  const advantages = [
    {
      icon: <Clock className="w-12 h-12 text-primary mb-4" />,
      title: "Rápida Respuesta",
      description: "Atendemos tu solicitud en menos de 24 horas para garantizar un servicio ágil y eficiente.",
    },
    {
      icon: <PiggyBank className="w-12 h-12 text-primary mb-4" />,
      title: "Precios Competitivos",
      description: "Ofrecemos tarifas transparentes y ajustadas al mercado sin comprometer la calidad.",
    },
    {
      icon: <Leaf className="w-12 h-12 text-primary mb-4" />,
      title: "Compromiso Ambiental",
      description: "Implementamos prácticas sostenibles en todos nuestros servicios para proteger el medio ambiente.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Ventajas de Contratarnos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow animate-fade-in"
            >
              <div className="flex justify-center">{advantage.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-secondary">
                {advantage.title}
              </h3>
              <p className="text-accent">
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