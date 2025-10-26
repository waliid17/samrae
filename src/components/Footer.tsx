import { useEffect, useRef } from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-neutral-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="SAMRAE"
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Créer des pièces de mode intemporelles qui célèbrent la féminité et rendent les femmes épanouies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-light tracking-wide mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-neutral-400 hover:text-white transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#collections" className="text-neutral-400 hover:text-white transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#palace" className="text-neutral-400 hover:text-white transition-colors">
                  Samrae Palace
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-light tracking-wide mb-4">Connexion</h3>
            <div className="space-y-3">
              <a
                href="https://instagram.com/samrae.dress"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @SAMRAE.DRESS
              </a>
              <div className="flex items-center gap-3 text-neutral-400 text-sm">
                <Mail className="w-4 h-4" />
                contact@samrae.com
              </div>
              <div className="flex items-center gap-3 text-neutral-400 text-sm">
                <MapPin className="w-4 h-4" />
                Samrae Palace
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} SAMRAE. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
