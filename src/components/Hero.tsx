import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden" style={{ transform: 'translateZ(0)' }}>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <img
            src="/logo.png"
            alt="SAMRAE"
            className="w-[28rem] h-80 xs:w-[32rem] xs:h-96 sm:w-[36rem] sm:h-[28rem] md:w-96 md:h-72 lg:w-[28rem] lg:h-80 xl:w-[32rem] xl:h-96 2xl:w-[36rem] 2xl:h-[20rem] mx-auto object-contain animate-slide-up animate-pulse-glow"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards', willChange: 'filter, transform' }}
            loading="eager"
          />
        </div>


        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-neutral-200 mb-4 opacity-0 animate-slide-up"
           style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Styliste | Créatrice de Mode
        </p>

        <p className="text-base sm:text-lg md:text-xl font-light text-neutral-300 opacity-0 animate-slide-up"
           style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          Créatrice de @SAMRAE.DRESS
        </p>

        <div className="mt-16 opacity-0 animate-fade-in"
             style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <ChevronDown className="w-8 h-8 mx-auto text-neutral-300 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
