export default function Payment({ language }) {
  const content = {
    es: {
      title: "Reserva Tu Lugar",
      subtitle: "Únete a una experiencia transformacional exclusiva",
      availability: "Solo 20 espacios disponibles",
      price: "1499€",
      cta: "Reservar Ahora",
      paymentNote: "Pago seguro procesado por Stripe",
      features: [
        "Acceso completo al retiro de 6 días",
        "Alojamiento de lujo en Tulum",
        "Gastronomía orgánica de alta vibración",
        "Sesiones guiadas por expertos mundiales"
      ]
    },
    en: {
      title: "Secure Your Spot",
      subtitle: "Join an exclusive transformational experience",
      availability: "Only 20 spots available",
      price: "1499€",
      cta: "Book Now",
      paymentNote: "Secure payment processed by Stripe",
      features: [
        "Full access to the 6-day retreat",
        "Luxury accommodation in Tulum",
        "High-vibration organic cuisine",
        "Sessions led by world-class experts"
      ]
    }
  };

  const currentContent = content[language] || content["es"]; // Fallback a "es" si language no es válido

  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Encabezado */}
        <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-4">
          {currentContent.title}
        </h2>
        <p className="text-xl text-amber-100/80 mb-6">
          {currentContent.subtitle}
        </p>

        {/* Precio y Disponibilidad */}
        <div className="bg-gray-800/50 rounded-xl p-6 inline-block mb-8">
          <p className="text-2xl font-bold text-amber-400">
            {currentContent.price}
          </p>
          <p className="text-lg text-amber-100/80 mt-2">
            {currentContent.availability}
          </p>
        </div>

        {/* Lista de Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left max-w-2xl mx-auto">
          {currentContent.features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              <span className="text-amber-100/90">{feature}</span>
            </div>
          ))}
        </div>

        {/* Botón de Pago */}
        <a
          href="https://buy.stripe.com/8wMdU92lq1t40jSfZ4" // Enlace de pago de Stripe
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 text-lg font-medium bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/20"
        >
          {currentContent.cta} →
        </a>

        {/* Nota de Pago Seguro */}
        <p className="mt-4 text-sm text-amber-100/60">
          {currentContent.paymentNote}
        </p>
      </div>
    </section>
  );
}