export default function ThankYou({ language }) {
    const content = {
      es: {
        title: "¡Gracias por tu reserva!",
        message: "Hemos recibido tu pago correctamente. En breve recibirás un correo electrónico con los detalles de tu reserva.",
        contact: "Si tienes alguna pregunta, contáctanos en info@weare-retreat.com."
      },
      en: {
        title: "Thank you for your booking!",
        message: "We have successfully received your payment. You will receive an email shortly with your booking details.",
        contact: "If you have any questions, contact us at info@weare-retreat.com."
      }
    };
  
    const currentContent = content[language] || content["es"];
  
    return (
      <section className="bg-gray-900 min-h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-100 mb-6">
            {currentContent.title}
          </h1>
          <p className="text-xl text-amber-100/80 mb-6">
            {currentContent.message}
          </p>
          <p className="text-lg text-amber-100/60">
            {currentContent.contact}
          </p>
        </div>
      </section>
    );
  }