import { FaInstagram, FaYoutube, FaEnvelope, FaFacebook } from "react-icons/fa";

export default function Footer({ language }) {
  const content = {
    es: {
      contactTitle: "Conéctate con Nosotros",
      email: "info@weare-retreat.com",
      phone: "+52 123 456 7890",
      rights: "© 2024 WE ARE Retreat. Todos los derechos reservados.",
      followUs: "Síguenos en:"
    },
    en: {
      contactTitle: "Connect With Us",
      email: "info@weare-retreat.com",
      phone: "+52 123 456 7890",
      rights: "© 2024 WE ARE Retreat. All rights reserved.",
      followUs: "Follow Us:"
    }
  };

  const currentContent = content[language] || content["es"];

  return (
    <footer className="bg-gray-900 border-t border-amber-500/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sección de Contacto */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-amber-100 mb-4">
            {currentContent.contactTitle}
          </h3>
          <div className="space-y-2 text-amber-100/80">
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-amber-500" />
              {currentContent.email}
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaFacebook className="text-amber-500" />
              {currentContent.phone}
            </p>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-100/80 hover:text-amber-400 transition-colors duration-300"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-100/80 hover:text-amber-400 transition-colors duration-300"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
          <a
            href="mailto:info@weare-retreat.com"
            className="text-amber-100/80 hover:text-amber-400 transition-colors duration-300"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-100/80 hover:text-amber-400 transition-colors duration-300"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>

        {/* Derechos de Autor */}
        <div className="text-center text-sm text-amber-100/60 border-t border-amber-500/10 pt-8">
          <p>{currentContent.rights}</p>
        </div>
      </div>
    </footer>
  );
}