"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/componentAnimation/AnimatedTitle";

const Home = () => {
  return (
    <div className="text-gray-800 font-sans">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-violet-900 via-violet-700 to-violet-600">
        <AnimatedTitle />
        {/* resto del contenido */}
        <p className="text-lg md:text-xl max-w-2xl mb-6 animate-fade-in-up delay-200">
          Tu tienda en línea favorita de moda, accesorios y tecnología. Compra
          con estilo, recibe con confianza.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-violet-700 mb-10">
          ¿Por qué comprar con nosotros?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Envíos Rápidos",
              desc: "Recibe tus productos en 48-72 horas en todo el país.",
              icon: "🚚",
            },
            {
              title: "Calidad Garantizada",
              desc: "Solo trabajamos con marcas confiables y productos verificados.",
              icon: "✅",
            },
            {
              title: "Pagos Seguros",
              desc: "Protegemos tus datos con tecnología de encriptación avanzada.",
              icon: "🔒",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-gray-50 py-24 px-6">
        <h2 className="text-3xl font-bold text-center text-violet-700 mb-12">
          Clientes Felices
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sofía G.",
              comment:
                "¡Increíble experiencia de compra! Todo llegó en tiempo y muy bien empacado.",
              img: "https://randomuser.me/api/portraits/women/45.jpg",
            },
            {
              name: "Daniel P.",
              comment: "La ropa tiene excelente calidad. ¡Volveré pronto!",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Luciana T.",
              comment:
                "Fácil de comprar, atención al cliente 10/10. Los accesorios son hermosos.",
              img: "https://randomuser.me/api/portraits/women/52.jpg",
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              <Image
                src={t.img}
                alt={t.name}
                width={80}
                height={80}
                className="mx-auto rounded-full object-cover mb-4"
              />
              <p className="italic text-gray-600">“{t.comment}”</p>
              <h4 className="mt-4 font-semibold text-violet-700">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 px-6 bg-violet-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          ¿Quieres enterarte de nuestras novedades?
        </h2>
        <p className="mb-6 text-lg">
          Suscríbete a nuestro boletín para recibir ofertas y nuevos productos
          directamente en tu correo.
        </p>
        <form className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="px-4 py-3 rounded-md text-black w-full"
          />
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-md font-semibold"
          >
            Suscribirme
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-violet-900 text-white text-center py-6">
        <p>
          © {new Date().getFullYear()} EstiloYa. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Home;
