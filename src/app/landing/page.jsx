"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero  prueva*/}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-violet-900 via-violet-700 to-violet-600 text-white">
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
            Bienvenido a Tu Tienda EstiloYa!!!
          </h1>
          <p className="text-xl mb-6 max-w-2xl">
            Encuentra los mejores productos en un solo lugar: moda, tecnología y
            accesorios únicos para cada estilo.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-teal-400 text-white font-semibold rounded-xl shadow hover:bg-teal-500 transition">
              Explorar Productos
            </button>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-violet-700 mb-4">
          Sobre Nosotros
        </h2>

        <section className="bg-white py-24 px-6 text-center text-gray-800">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-violet-700">
              ¿Por qué elegir EstiloYa?
            </h2>
            <p className="text-lg leading-relaxed">
              En EstiloYa nos apasiona brindarte productos de calidad con un
              estilo que se adapta a ti. Cada artículo en nuestra tienda ha sido
              seleccionado cuidadosamente para ofrecerte una experiencia única
              de compra. Desde lo más moderno en tecnología hasta accesorios que
              marcan tendencia.
            </p>
            <p className="text-lg leading-relaxed">
              Nuestra misión es ayudarte a encontrar eso que te hace sentir
              bien, cómodo, y auténtico. 💫
            </p>
            <div className="flex justify-center mt-8">
              <Image
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Presentación tienda"
                width={400}
                height={300}
                className="rounded-xl shadow-xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </section>
      </section>

      {/* ❌ Se eliminó el apartado de 'Nuestros Productos' */}

      {/* Testimonios */}
      <section className="bg-gray-50 py-24 px-6">
        <h2 className="text-3xl font-bold text-center text-violet-700 mb-12">
          Lo que dicen nuestros clientes
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Lucía R.",
              comment:
                "¡Me encantó la calidad de los productos! Todo llegó rápido y en excelente estado.",
              image: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Carlos M.",
              comment:
                "Compré dos monitores y funcionan perfecto. Volveré a comprar sin duda.",
              image: "https://randomuser.me/api/portraits/men/36.jpg",
            },
            {
              name: "Ana G.",
              comment:
                "Buena atención al cliente y variedad de productos. ¡Recomiendo EstiloYa a todos mis amigos!",
              image: "https://randomuser.me/api/portraits/women/65.jpg",
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="mx-auto rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 italic">“{testimonial.comment}”</p>
              <h4 className="mt-4 font-semibold text-violet-700">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="py-28 px-6 bg-gradient-to-br from-violet-700 via-violet-600 to-violet-500 text-center text-white rounded-t-3xl">
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <h2 className="text-4xl font-bold">
            ¡Descubre nuestros productos hoy mismo!
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Tu próxima compra favorita está a un clic de distancia. Vive la
            experiencia EstiloYa.
          </p>
          <button className="px-10 py-4 bg-teal-500 text-white font-semibold rounded-xl shadow hover:bg-teal-600 transition">
            Comprar Ahora
          </button>
          <div className="mt-12 flex justify-center gap-6">
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80"
              alt="Producto ejemplo"
              width={96}
              height={96}
              className="rounded-xl object-cover shadow-lg"
            />
            <Image
              src="https://images.unsplash.com/photo-1600180758187-4f74b9e7f446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Producto ejemplo 2"
              width={96}
              height={96}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-violet-900 text-center text-violet-100">
        <p>
          © {new Date().getFullYear()} Tu Tienda EstiloYa!!!. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
