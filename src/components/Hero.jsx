export default function Hero({ language }) {
  const content = {
    es: {
      preTitle: "Retiro Exclusivo | Tulum, México",
      titlePart1: "Para líderes que",
      titleHighlight: "transforman realidades",
      subtitle: "Una experiencia íntima para 20 visionarios seleccionados personalmente. Donde tu energía y propósito se convierten en parte del viaje colectivo.",
      cta: "Solicitar Invitación",
      audience: [
        "Líderes que buscan reconectar con su poder interno",
        "Creadores de cambio listos para el siguiente nivel",
        "Visionarios que transforman ideas en impacto real"
      ]
    },
    en: {
      preTitle: "Exclusive Retreat | Tulum, Mexico",
      titlePart1: "For leaders who",
      titleHighlight: "transform realities",
      subtitle: "An intimate experience for 20 hand-picked visionaries. Where your energy and purpose become part of the collective journey.",
      cta: "Request Invitation",
      audience: [
        "Leaders seeking to reconnect with their inner power",
        "Changemakers ready for the next level",
        "Visionaries turning ideas into real impact"
      ]
    },
  };

  const currentContent = content[language];

  return (
    <section className="relative h-[95vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/hero.jpg')" }}>
      
      <div className="max-w-4xl px-4 mx-auto text-center space-y-8">
        {/* Pre-title */}
        <p className="text-lg font-light tracking-widest text-amber-200 uppercase opacity-90">
          {currentContent.preTitle}
        </p>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          {currentContent.titlePart1}
          <span className="block mt-3 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            {currentContent.titleHighlight}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-light text-gray-200 max-w-3xl mx-auto leading-relaxed">
          {currentContent.subtitle}
        </p>

        {/* Audience List */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {currentContent.audience.map((item, index) => (
            <span key={index} className="px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-sm text-amber-100 border border-amber-400/30">
              {item}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 animate-pulse-slow">
          <a
            href="https://forms.gle/tu-formulario"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 text-lg font-medium bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/20"
          >
            {currentContent.cta} →
          </a>
        </div>
      </div>
    </section>
  );
}