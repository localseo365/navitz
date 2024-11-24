const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NAVITZ</h3>
            <p className="text-sm text-gray-300">
              Expertos en vaciado y limpieza de naves industriales en Barcelona
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-sm text-gray-300">
              Email: info@navitz.com<br />
              Teléfono: 633 75 96 49<br />
              Barcelona, España
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horario</h3>
            <p className="text-sm text-gray-300">
              Servicio 24/7<br />
              365 días al año
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} NAVITZ. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;