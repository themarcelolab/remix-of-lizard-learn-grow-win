import { useEffect, useState, useRef } from "react";

const AnimatedPhrase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = ["Inglês", "que", "respeita", "a", "sua", "memória."];
  const colors = [
    "text-lizard-green",
    "text-foreground",
    "text-lizard-purple",
    "text-foreground",
    "text-foreground",
    "text-lizard-orange",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Colorful background */}
      <div className="absolute inset-0 bg-gradient-to-r from-lizard-green/10 via-lizard-purple/10 to-lizard-orange/10" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-lizard-yellow/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-lizard-blue/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {words.map((word, index) => (
              <span
                key={index}
                className={`inline-block ${colors[index]} transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                }}
              >
                {word}
                {index < words.length - 1 && "\u00A0"}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AnimatedPhrase;
