import { useState } from "react";
import coach1 from "/images/coach1.jpg";
import coach2 from "/images/coach2.jpg";
import coach3 from "/images/coach3.jpg";

export default function Facilitators({ language = "es" }) {
  const content = {
    es: {
      title: "Guiados por Maestros",
      subtitle:
        "Un retiro se define por quienes lo lideran. Conoce a tus guías - expertos de clase mundial en transformación profunda.",
      cta: "Solicitar Invitación",
      facilitators: [
        {
          name: "Justin Green",
          title: "Estratega de Transformación",
          image: coach1,
          highlights: [
            "Fundador de Resilience OS",
            "+10 años trabajando con ejecutivos Fortune 500",
            "Experto en mentalidad de alto rendimiento",
          ],
        },
        {
          name: "Jordan Sotto",
          title: "Alquimista Energético",
          image: coach2,
          highlights: [
            "Especialista en neurociencia aplicada",
            "Fusión de prácticas ancestrales y técnicas modernas",
            "Maestro en alineación personal profunda",
          ],
        },
        {
          name: "Benjo Podlech",
          title: "Coach de Sanación y Guía de Ceremonias",
          image: coach3,
          highlights: [
            "Más de 12 años de experiencia en sanación con plantas sagradas",
            "Guía de ceremonias transformadoras para soltar, sanar y renacer",
            "Conector con la sabiduría ancestral y experto en viajes de transformación profunda",
          ],
        },
      ],
    },
    en: {
      title: "Guided by Masters",
      subtitle:
        "A retreat is defined by those who lead it. Meet your guides - world-class experts in deep transformation.",
      cta: "Request Invitation",
      facilitators: [
        {
          name: "Justin Green",
          title: "Transformation Strategist",
          image: coach1,
          highlights: [
            "Founder of Resilience OS",
            "10+ years working with Fortune 500 executives",
            "Expert in high-performance mindset",
          ],
        },
        {
          name: "Jordan Sotto",
          title: "Energy Alchemist",
          image: coach2,
          highlights: [
            "Applied neuroscience specialist",
            "Blends ancient practices with modern techniques",
            "Master in deep personal alignment",
          ],
        },
        {
          name: "Benjo Podlech",
          title: "Healing Coach and Ceremony Guide",
          image: coach3,
          highlights: [
            "Over 12 years of experience in healing with sacred plants",
            "Guide of transformative ceremonies to release, heal, and rebirth",
            "Connector with ancestral wisdom and expert in deep transformational journeys",
          ],
        },
      ],
    },
  };

  const [selectedFacilitator, setSelectedFacilitator] = useState(null);
  const currentContent = content[language] || content["es"];

  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-amber-100/80 max-w-3xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Grid de Facilitadores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {currentContent.facilitators.map((facilitator, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedFacilitator(facilitator)}
            >
              <div className="flex flex-col items-center">
                {/* Imagen */}
                <div className="relative mb-6">
                  <img
                    src={facilitator.image}
                    alt={facilitator.name}
                    className="w-48 h-48 rounded-full object-cover border-4 border-amber-500/30 group-hover:border-amber-500/50 transition-all duration-300"
                  />
                </div>

                {/* Texto */}
                <h3 className="text-2xl font-bold text-amber-100 mb-2">
                  {facilitator.name}
                </h3>
                <p className="text-lg text-amber-400/90 mb-4">
                  {facilitator.title}
                </p>
                <ul className="space-y-2 text-amber-100/80 text-sm">
                  {facilitator.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-amber-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-pulse-slow">
          <a
            href="https://buy.stripe.com/8wMdU92lq1t40jSfZ4" // Enlace oculto de Stripe
            className="inline-block px-12 py-4 text-lg font-medium bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/20"
          >
            {currentContent.cta} →
          </a>
          <p className="mt-4 text-sm text-amber-100/60">
            {language === "es"
              ? "20 plazas disponibles - Único grupo del año"
              : "20 spots available - Only group this year"}
          </p>
        </div>

        {/* Modal de Detalle */}
        {selectedFacilitator && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-gray-900 rounded-2xl max-w-2xl w-full p-8 relative">
              <button
                onClick={() => setSelectedFacilitator(null)}
                className="absolute top-4 right-4 text-amber-100 hover:text-amber-400"
              >
                ✕
              </button>
              <div className="flex flex-col md:flex-row gap-8">
                <img
                  src={selectedFacilitator.image}
                  alt={selectedFacilitator.name}
                  className="w-48 h-48 rounded-full object-cover mx-auto"
                />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-amber-100 mb-2">
                    {selectedFacilitator.name}
                  </h3>
                  <p className="text-xl text-amber-400 mb-4">
                    {selectedFacilitator.title}
                  </p>
                  <ul className="space-y-3 text-amber-100/90">
                    {selectedFacilitator.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 mr-2 mt-1 text-amber-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
