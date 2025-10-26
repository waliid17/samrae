import { useEffect, useRef, useState } from 'react';
import { Scissors, Ruler, Users, Sparkles } from 'lucide-react';

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-smooth-float-in');
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && !visibleCards.includes(index)) {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 50);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  const services = [
    {
      icon: Scissors,
      title: 'Design Sur Mesure',
      description: 'Pièces créées spécialement pour votre style unique et vos mesures'
    },
    {
      icon: Ruler,
      title: 'Styling Personnel',
      description: 'Conseils d\'expert pour sublimer votre garde-robe et votre image'
    },
    {
      icon: Users,
      title: 'Collection Mariée',
      description: 'Créez votre robe de mariée de rêve avec nos designs exclusifs'
    },
    {
      icon: Sparkles,
      title: 'Occasions Spéciales',
      description: 'Brillez lors de vos événements avec nos tenues de soirée glamour'
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4">
            Services
          </h2>
          <div className="w-20 h-0.5 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Services de mode complets adaptés à vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`text-center group transition-all duration-500 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-light tracking-wide mb-3">
                {service.title}
              </h3>

              <p className="text-neutral-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
