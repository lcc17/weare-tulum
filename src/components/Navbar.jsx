import { useState } from "react";

export default function Navbar({ language, setLanguage }) {
  const content = {
    es: {
      navLinks: ["La Experiencia", "Transformación", "Creadores", "Contacto"],
      cta: "Solicitar Invitación",
    },
    en: {
      navLinks: ["The Experience", "Transformation", "Creators", "Contact"],
      cta: "Request Invitation",
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/70 border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="WE ARE Logo"
              className="h-12 w-12 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {content[language].navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-amber-100/90 hover:text-amber-400 text-sm font-light tracking-wide transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Language Switch */}
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="hidden md:inline-block text-amber-100/80 hover:text-amber-400 text-sm font-light border-r border-amber-500/20 pr-6 transition-colors duration-300"
            >
              {language === "es" ? "EN" : "ES"}
            </button>

            {/* Desktop CTA */}
            <a
              href="https://forms.gle/tu-formulario"
              className="hidden md:inline-block px-5 py-2.5 bg-gradient-to-r from-amber-500/90 to-amber-600/90 hover:from-amber-600 hover:to-amber-700 text-sm text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/20"
            >
              {content[language].cta}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-amber-100 hover:text-amber-400"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            {content[language].navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="block px-3 py-2 text-amber-100/90 hover:text-amber-400 text-base"
              >
                {link}
              </a>
            ))}
            <div className="pt-4 border-t border-amber-500/10">
              <a
                href="https://forms.gle/tu-formulario"
                className="block w-full px-4 py-3 text-center bg-amber-500/90 text-white rounded-lg"
              >
                {content[language].cta}
              </a>
              <button
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                className="mt-2 block w-full px-4 py-2 text-center text-amber-100/90 hover:text-amber-400"
              >
                {language === "es" ? "Switch to English" : "Cambiar a Español"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
