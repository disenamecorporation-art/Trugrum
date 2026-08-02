import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck, Zap, Globe, Smartphone, CreditCard, ArrowRight } from 'lucide-react';

interface VenezuelaServicesSliderProps {
  onOpenAuth?: () => void;
}

export const VenezuelaServicesSlider: React.FC<VenezuelaServicesSliderProps> = ({ onOpenAuth }) => {
  const slides = [
    {
      title: "Alimentos",
      subtitle: "Retails, fast food y restaurante, procesados",
      description: "Inversión en el sector alimentario, abarcando desde la cadena de suministros retail hasta franquicias de comida rápida y procesamiento de alimentos.",
      badge: "Sector Alimentario",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
      icon: <Globe className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Tecnología y Servicios",
      subtitle: "Desarrollo de software y servicios profesionales",
      description: "Impulso a la innovación mediante el desarrollo de software a medida y la prestación de servicios profesionales de alto valor agregado.",
      badge: "Sector Tecnológico",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      icon: <Smartphone className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Commodities",
      subtitle: "Materias primas básicas en mercados mundiales",
      description: "Trigo, maíz, soya, café y azúcar. Activos esenciales que se compran y venden en mercados mundiales con alta demanda constante.",
      badge: "Materias Primas",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      icon: <Globe className="w-6 h-6 text-emerald-400" />
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentIndex];

  return (
    <section id="areas-inversion" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-[#0B132B] tracking-tight mb-4">
            Áreas de <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-700">Inversión</span>
          </h2>
          <p className="text-slate-600 font-light text-sm sm:text-base">
            Conoce los sectores donde impulsamos el crecimiento y desarrollo sostenible.
          </p>
        </div>

        {/* Banner Slider Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0B132B] text-white border border-emerald-500/30 min-h-[440px] flex items-center">
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover opacity-25 filter brightness-75 transition-all duration-1000 transform scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/90 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-12 lg:p-16 max-w-2xl space-y-4 sm:space-y-6 pb-20 sm:pb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-medium">
              {slide.icon}
              <span>{slide.badge}</span>
            </div>

            <h3 className="text-xl sm:text-4xl font-light text-white tracking-tight">
              {slide.title}
            </h3>

            <p className="text-emerald-400 font-medium text-xs sm:text-base">
              {slide.subtitle}
            </p>

            <p className="text-slate-300 font-light text-xs sm:text-sm leading-relaxed">
              {slide.description}
            </p>

            <div className="flex items-center gap-4 pt-2 sm:pt-4">
              <button 
                onClick={onOpenAuth}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00E676] text-slate-950 font-medium text-xs tracking-wide shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Ir a registro</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2 sm:gap-3">
            <button
              onClick={prevSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="text-xs text-slate-300 font-light px-1 sm:px-2">
              {currentIndex + 1} / {slides.length}
            </div>
            <button
              onClick={nextSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
