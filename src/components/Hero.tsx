import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    // Force logo reload on mobile
    const img = new Image();
    img.onload = () => setLogoError(false);
    img.onerror = () => setLogoError(true);
    img.src = '/logo.png';
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          {!logoError ? (
            <img
              src="/logo.png"
              alt="SAMRAE"
              className="w-[20rem] h-32 sm:w-[24rem] sm:h-40 md:w-[28rem] md:h-48 lg:w-[32rem] lg:h-56 xl:w-[36rem] xl:h-64 2xl:w-[40rem] 2xl:h-72 mx-auto object-contain animate-slide-up animate-pulse-glow"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="w-[20rem] h-32 sm:w-[24rem] sm:h-40 md:w-[28rem] md:h-48 lg:w-[32rem] lg:h-56 xl:w-[36rem] xl:h-64 2xl:w-[40rem] 2xl:h-72 mx-auto flex items-center justify-center">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-wider text-white animate-pulse-glow">SAMRAE</span>
            </div>
          )}
        </div>


        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-neutral-200 mb-4 opacity-0 animate-slide-up"
           style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Styliste | Créatrice de Mode
        </p>

        <p className="text-base sm:text-lg md:text-xl font-light text-neutral-300 opacity-0 animate-slide-up"
           style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          Créatrice de @SAMRAE.DRESS
        </p>

        <div className="mt-8 sm:mt-12 md:mt-16 opacity-0 animate-fade-in"
             style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto text-neutral-300 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
