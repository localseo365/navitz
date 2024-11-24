import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "34633759649";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
    toast({
      title: "Formulario enviado",
      description: "Nos pondremos en contacto contigo lo antes posible.",
    });
  };

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contacta con Nosotros
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Nombre" required />
              <Input placeholder="Teléfono" required type="tel" />
            </div>
            <Input placeholder="Email" required type="email" />
            <Textarea placeholder="Mensaje" required className="min-h-[120px]" />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;