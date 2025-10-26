import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <img
            src="/logo.png"
            alt="SAMRAE"
            className="w-[32rem] h-64 sm:w-[36rem] sm:h-72 md:w-[40rem] md:h-80 lg:w-[44rem] lg:h-88 xl:w-[48rem] xl:h-96 2xl:w-[52rem] 2xl:h-[28rem] mx-auto object-contain animate-slide-up animate-pulse-glow"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling.style.display = 'block';
            }}
          />
          <div className="hidden w-[32rem] h-64 sm:w-[36rem] sm:h-72 md:w-[40rem] md:h-80 lg:w-[44rem] lg:h-88 xl:w-[48rem] xl:h-96 2xl:w-[52rem] 2xl:h-[28rem] mx-auto flex items-center justify-center">
            <span className="text-6xl md:text-8xl font-light tracking-wider text-white animate-pulse-glow">SAMRAE</span>
          </div>
        </div>


        <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-neutral-200 mb-4 opacity-0 animate-slide-up"
           style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Styliste | Créatrice de Mode
        </p>

        <p className="text-lg md:text-xl font-light text-neutral-300 opacity-0 animate-slide-up"
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
