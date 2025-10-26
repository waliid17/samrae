import { useEffect, useRef, useState } from 'react';
import { Mail, Instagram, MapPin } from 'lucide-react';

export default function Contact() {
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

  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white mb-4">
            Contactez-nous
          </h2>
          <div className="w-20 h-0.5 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Créons quelque chose de magnifique ensemble
          </p>
        </div>

        <div className="bg-neutral-900 rounded-sm border border-neutral-700 p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900 border border-neutral-600 flex items-center justify-center group-hover:border-rose-400/50 group-hover:scale-110 transition-all duration-300">
                <Mail className="w-7 h-7 text-neutral-300 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-light text-white mb-2">Email</h3>
              <p className="text-neutral-400 text-sm">contact@samrae.com</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900 border border-neutral-600 flex items-center justify-center group-hover:border-rose-400/50 group-hover:scale-110 transition-all duration-300">
                <Instagram className="w-7 h-7 text-neutral-300 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-light text-white mb-2">Instagram</h3>
              <a
                href="https://instagram.com/samrae.dress"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 text-sm hover:text-white transition-colors"
              >
                @SAMRAE.DRESS
              </a>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900 border border-neutral-600 flex items-center justify-center group-hover:border-rose-400/50 group-hover:scale-110 transition-all duration-300">
                <MapPin className="w-7 h-7 text-neutral-300 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-light text-white mb-2">Visite</h3>
              <p className="text-neutral-400 text-sm">Samrae Palace</p>
            </div>
          </div>

          <form 
            ref={formRef}
            className={`space-y-6 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-light text-neutral-300 mb-2">Nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-neutral-600 bg-neutral-800 text-white rounded-sm focus:outline-none focus:border-neutral-400 transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-neutral-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-neutral-600 bg-neutral-800 text-white rounded-sm focus:outline-none focus:border-neutral-400 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-light text-neutral-300 mb-2">Sujet</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-neutral-600 bg-neutral-800 text-white rounded-sm focus:outline-none focus:border-neutral-400 transition-colors"
                placeholder="Comment pouvons-nous vous aider ?"
              />
            </div>

            <div>
              <label className="block text-sm font-light text-neutral-300 mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-neutral-600 bg-neutral-800 text-white rounded-sm focus:outline-none focus:border-neutral-400 transition-colors resize-none"
                placeholder="Parlez-nous de votre projet..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-neutral-800 to-neutral-700 text-white py-4 rounded-sm font-light tracking-wider border border-neutral-600 hover:border-rose-400/50 hover:bg-gradient-to-r hover:from-neutral-700 hover:to-neutral-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              ENVOYER LE MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
