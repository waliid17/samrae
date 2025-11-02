import { useEffect, useRef } from 'react';

export default function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          if (entry.target === titleRef.current) {
            entry.target.classList.add('animate-fade-in-up');
          } else if (entry.target === leftRef.current) {
            entry.target.classList.add('animate-slide-in-left');
          } else if (entry.target === rightRef.current) {
            entry.target.classList.add('animate-smooth-image-reveal');
            // Animate the decorative border with a slight delay
            const borderElement = entry.target.querySelector('.absolute.-bottom-6');
            if (borderElement) {
              setTimeout(() => {
                borderElement.classList.add('opacity-100');
              }, 800);
            }
          }
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white mb-8 opacity-0">
            Mon Histoire
          </h2>
          <div className="w-32 h-0.5 bg-white mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 lg:space-y-12">
            <div ref={leftRef} className="opacity-0 space-y-12">
              <div>
                <h3 className="text-3xl font-light text-white mb-6">2018 - Le Début</h3>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  En 2018, j'ai entré dans le domaine du styling. Ce fut le commencement d'un parcours dédié 
                  à l'art de l'élégance contemporaine. À travers le dévouement et l'apprentissage continu, j'ai développé 
                  une esthétique raffinée et approfondi ma compréhension de la mode moderne et du stylisme personnel.
                </p>
              </div>
              
              <div>
                <h3 className="text-3xl font-light text-white mb-6">La Construction de la Marque</h3>
               <p className="text-lg text-neutral-300 leading-relaxed">
  Portée par mon expérience et ma vision, j'ai créé 
  <strong className="font-extrabold text-white tracking-wide">
    {' '}SAMRAE DRESS
  </strong>. 
  Cette marque incarne mon engagement à créer des pièces sophistiquées et intemporelles qui célèbrent la féminité. 
  Chaque collection est méticuleusement conçue pour incarner l'élégance, la confiance et le style authentique.
</p>

              </div>

              <div>
                <h3 className="text-3xl font-light text-white mb-6">2025 - SAMRAE PALACE</h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
  En 2025, j'ai ouvert 
  <strong className="font-extrabold text-white tracking-wide">
    {' '}SAMRAE PALACE
  </strong>, 
  une boutique exclusive incarnant l'élégance et le raffinement de nos créations. 
  Cet espace offre une expérience de shopping luxueuse, présentant nos collections signature 
  et des services de styling personnalisés dans un cadre élégant et intimiste.
</p>



              </div>
              
              <div>
                <h3 className="text-3xl font-light text-white mb-6">La Vision</h3>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  Aujourd'hui, SAMRAE représente un symbole de sophistication raffinée. Que ce soit en ligne ou à SAMRAE PALACE, 
                  notre mission est de permettre aux femmes d'exprimer leur style authentique à travers un design exceptionnel. 
                  Chaque création est pensée pour vous faire sentir confiante, élégante et unique.
                </p>
              </div>
            </div>
          </div>
          
          <div ref={rightRef} className="opacity-0 order-first lg:order-last flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl relative group mx-auto">
                <img 
                  src="/me.png" 
                  alt="About me" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
