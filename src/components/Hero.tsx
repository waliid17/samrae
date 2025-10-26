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
              className="w-[32rem] h-64 sm:w-[36rem] sm:h-72 md:w-[40rem] md:h-80 lg:w-[44rem] lg:h-88 xl:w-[48rem] xl:h-96 2xl:w-[52rem] 2xl:h-[28rem] mx-auto object-contain animate-slide-up animate-pulse-glow"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="w-[32rem] h-64 sm:w-[36rem] sm:h-72 md:w-[40rem] md:h-80 lg:w-[44rem] lg:h-88 xl:w-[48rem] xl:h-96 2xl:w-[52rem] 2xl:h-[28rem] mx-auto flex items-center justify-center">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-light tracking-wider text-white animate-pulse-glow">SAMRAE</span>
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
