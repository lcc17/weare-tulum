import tulum from "/images/tulum-beach.jpg"
import tulum2 from "/images/tulum-jungle.jpg"

export default function Location({ language }) {
  const content = {
    es: {
      title: "Ubicación y Fechas",
      location: "📍 Tulum, México",
      date: "📅 12 al 18 de Mayo, 2025",
      description: "Un paraíso en la Riviera Maya, donde el mar Caribe se encuentra con la selva tropical. Nuestro retiro se llevará a cabo en una exclusiva villa privada con vistas al océano.",
      cta: "Explora el Lugar",
      mapLink: "https://goo.gl/maps/ejemplo",
      quote: "Tulum no es solo un destino; es un estado de ánimo. Un lugar donde el tiempo se detiene y la transformación comienza.",
      ceo: "— Justin Green, Fundador de WE ARE Retreat"
    },
    en: {
      title: "Location & Dates",
      location: "📍 Tulum, Mexico",
      date: "📅 May 12-18, 2025",
      description: "A paradise in the Riviera Maya, where the Caribbean Sea meets the tropical jungle. Our retreat will take place in a private oceanfront villa.",
      cta: "Explore the Location",
      mapLink: "https://goo.gl/maps/ejemplo",
      quote: "Tulum is not just a destination; it’s a state of mind. A place where time stands still and transformation begins.",
      ceo: "— Justin Green, Founder of WE ARE Retreat"
    }
  };

  const currentContent = content[language] || content["es"];

  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 border-t border-amber-500/10">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-6 text-center">
          {currentContent.title}
        </h2>

        {/* Ubicación y Fecha */}
        <div className="space-y-4 text-amber-100/80 text-lg mb-8 text-center">
          <p>{currentContent.location}</p>
          <p>{currentContent.date}</p>
        </div>

        {/* Descripción */}
        <p className="text-xl text-amber-100/80 max-w-2xl mx-auto mb-12 text-center leading-relaxed">
          {currentContent.description}
        </p>

        {/* Grid de Imágenes y Texto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Imagen 1 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={tulum} // Ruta de la primera imagen
              alt="Playa de Tulum"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end p-6">
              <p className="text-amber-100/90 text-lg italic">
                "El mar Caribe, un espejo para la transformación interior."
              </p>
            </div>
          </div>

          {/* Imagen 2 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={tulum2} // Ruta de la segunda imagen
              alt="Selva de Tulum"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end p-6">
              <p className="text-amber-100/90 text-lg italic">
                "La selva, un santuario para reconectar con tu esencia."
              </p>
            </div>
          </div>
        </div>

        {/* Cita del CEO */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-2xl text-amber-100/90 italic mb-4">
            {currentContent.quote}
          </p>
          <p className="text-lg text-amber-100/70">
            {currentContent.ceo}
          </p>
        </div>

        {/* Botón de Explorar */}
        <div className="text-center">
          <a
            href={currentContent.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/20"
          >
            {currentContent.cta} →
          </a>
        </div>
      </div>
    </section>
  );
}