import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              NAVITZ es una empresa líder en Barcelona especializada en servicios de vaciado y limpieza de naves industriales. Con más de una década de experiencia, nos hemos consolidado como referentes en el sector industrial, ofreciendo soluciones integrales y sostenibles para empresas de todos los tamaños.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestro equipo altamente cualificado utiliza las técnicas más avanzadas y maquinaria especializada para garantizar resultados excepcionales en cada proyecto. Nos distinguimos por nuestra capacidad de adaptación, eficiencia y compromiso con el medio ambiente.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary">10+</span>
                <span className="text-sm text-gray-600">Años de experiencia</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary">500+</span>
                <span className="text-sm text-gray-600">Proyectos completados</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary">100%</span>
                <span className="text-sm text-gray-600">Clientes satisfechos</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
              alt="Equipo NAVITZ trabajando en limpieza industrial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;