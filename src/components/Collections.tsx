import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Collections() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
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
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  const collections = [
    {
      title: 'Élégance de Soirée',
      description: 'Pièces sophistiquées pour occasions spéciales',
      season: 'Automne/Hiver 2024',
      video: '/1.mp4'
    },
    {
      title: 'Caftan Collection',
      description: 'Élégance orientale et sophistication moderne',
      season: 'Collection Spéciale 2024',
      video: '/2.mp4'
    }
  ];

  return (
    <section ref={sectionRef} id="collections" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white mb-4">
            Collections
          </h2>
          <div className="w-20 h-0.5 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Découvrez nos collections soigneusement sélectionnées conçues pour faire briller chaque femme
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative bg-neutral-900 rounded-sm border border-neutral-700 hover:border-neutral-500 transition-all duration-500 hover:shadow-lg overflow-hidden ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-12'
              }`}
            >
              {/* Video Container */}
              <div className="relative w-full h-80 overflow-hidden">
                <video
                  key={collection.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: 'brightness(0.6)' }}
                >
                  <source src={collection.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                {/* Content over video */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>

                  <span className="text-xs font-light tracking-wider text-white/80 uppercase">
                    {collection.season}
                  </span>

                  <h3 className="text-2xl font-light tracking-wide text-white mt-2 mb-2">
                      {collection.title}
                  </h3>

                  <p className="text-white/90 leading-relaxed text-sm">
                    {collection.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
