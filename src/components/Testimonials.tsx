import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "NAVITZ transformó nuestra nave en un tiempo récord. ¡Totalmente recomendados!",
    author: "María García",
    company: "Logística BCN",
    rating: 5,
  },
  {
    id: 2,
    text: "Servicio profesional y eficiente. Superaron nuestras expectativas.",
    author: "Carlos Martínez",
    company: "Industrial Solutions",
    rating: 5,
  },
  {
    id: 3,
    text: "Excelente trabajo en la limpieza industrial. Muy satisfechos con el resultado.",
    author: "Ana Rodríguez",
    company: "Manufacturas Express",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
          Testimonios
        </h2>
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-1">
                    <Card className="border-none shadow-lg">
                      <CardContent className="flex flex-col items-center p-6">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-primary text-primary"
                            />
                          ))}
                        </div>
                        <blockquote className="text-lg md:text-xl text-gray-700 text-center mb-4 italic">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="text-center">
                          <p className="font-semibold text-secondary">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-gray-500">
                            {testimonial.company}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;