const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Experiencia",
      description: "Más de 10 años en el sector industrial",
    },
    {
      title: "Profesionalidad",
      description: "Equipo altamente cualificado y certificado",
    },
    {
      title: "Rapidez",
      description: "Servicio ágil y eficiente en toda Barcelona",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Por qué elegir NAVITZ?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-primary/5">
              <h3 className="text-xl font-bold mb-4 text-primary">{reason.title}</h3>
              <p className="text-accent">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;