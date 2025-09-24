"use client";

import { useEffect, useState } from "react";

const AnimatedTitle = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Bienvenido a Tu Tienda EstiloYa!!!";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl font-bold mb-4 text-center text-white">
      {displayedText}
      <span className="blinking-cursor">|</span>
      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 5rem;
          color: white;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </h1>
  );
};

export default AnimatedTitle;
