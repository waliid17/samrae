import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

export default function Palace() {
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

  const [visibleInfo, setVisibleInfo] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);
  const [visibleMap, setVisibleMap] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === infoRef.current) {
              setVisibleInfo(true);
            } else if (entry.target === mapRef.current) {
              setVisibleMap(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (infoRef.current) observer.observe(infoRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="palace" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white mb-4">
            Samrae Palace
          </h2>
          <div className="w-20 h-0.5 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Visitez notre boutique exclusive pour une expérience de styling personnalisée
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={infoRef}
            className={`space-y-8 transition-all duration-1000 ${
              visibleInfo ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-neutral-300" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-light text-white mb-2">Localisation</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Notre boutique phare vous accueille dans un cadre élégant où la mode rencontre l'art
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-neutral-300" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-light text-white mb-2">Horaires d'Ouverture</h3>
                <p className="text-neutral-300">Lundi - Samedi : 10h00 - 19h00</p>
                <p className="text-neutral-300">Dimanche : Sur Rendez-vous</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-neutral-300" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-light text-white mb-2">Réserver un Rendez-vous</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Vivez une expérience de styling personnalisée et des consultations design sur mesure
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-neutral-300" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-light text-white mb-2">Suivez-nous</h3>
                <a
                  href="https://instagram.com/samrae.dress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  @SAMRAE.DRESS
                </a>
              </div>
            </div>
          </div>

          <div 
            ref={mapRef}
            className={`relative group transition-all duration-1000 ${
              visibleMap ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Decorative borders */}
            <div className="absolute -top-8 -left-8 w-full h-full border border-neutral-700/30 rounded-lg -z-20 pointer-events-none"></div>
            <div className="absolute -top-4 -left-4 w-full h-full border border-neutral-600/40 rounded-lg -z-10 pointer-events-none"></div>
            
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-2xl transform transition-transform group-hover:scale-[1.02] duration-300">
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42983.10612723132!2d3.0580746981949316!3d36.77281803320332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb4d2dd61a6a1%3A0xe42cf3b093e5e1ff!2sAlger%2C%20Algeria!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-lg"
                title="SAMRAE Palace Location"
              ></iframe>
              
              {/* Gradient overlay for elegant look */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/20 via-transparent to-rose-900/10 pointer-events-none"></div>
              
              {/* Elegant border */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-lg pointer-events-none"></div>
              
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-12 h-12 border-l border-t border-white/20 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-r border-b border-white/20 pointer-events-none"></div>
            </div>
            
            {/* Bottom decorative element */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-rose-600/10 rounded-full blur-xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
