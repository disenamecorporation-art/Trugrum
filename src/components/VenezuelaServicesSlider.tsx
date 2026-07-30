import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck, Zap, Globe, Smartphone, CreditCard, ArrowRight } from 'lucide-react';

export const VenezuelaServicesSlider: React.FC = () => {
  const slides = [
    {
      title: "Crédito Digital & BNPL (Compra Ahora, Paga Después)",
      subtitle: "La revolución del consumo sin tarjeta tradicional",
      description: "Plataformas como Cashea y Kredi lideran el financiamiento fraccionado, permitiendo a los usuarios adquirir bienes con una inicial y cuotas sin intereses.",
      badge: "Líder: Cashea",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
      icon: <CreditCard className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Banca Tradicional y Canales Digitales SUDEBAN",
      subtitle: "Infraestructura robusta de Pago Móvil y cuentas en divisas",
      description: "Banesco, Mercantil, Bancamiga, BNC, BBVA Provincial y BDV ofrecen P2P instantáneo, cuentas custodia USD/EUR y APIs comerciales avanzadas.",
      badge: "Regulado SUDEBAN",
      image: "https://images.unsplash.com/photo-1556742049-0a67d5e5223e?auto=format&fit=crop&w=1200&q=80",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Billeteras Digitales y Tarjetas Internacionales",
      subtitle: "Zinli, Wally y Ubii Pagos para comercio global y local",
      description: "Soluciones fintech que emiten tarjetas de débito internacionales virtuales y conectan el ecosistema de bolívares con pasarelas de pago globales.",
      badge: "Visa / Mastercard",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
      icon: <Smartphone className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Remesas y Plataformas P2P Descentralizadas",
      subtitle: "El Dorado, Binance P2P y Zoom Remesas",
      description: "Intercambio fluido de bolívares por dólares digitales (USDT, cUSD) y recepción de remesas formales a tasa oficial del Banco Central de Venezuela.",
      badge: "Alta Liquidez P2P",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
      icon: <Globe className="w-6 h-6 text-emerald-400" />
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
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
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-light tracking-widest uppercase mb-4 shadow-sm">
            <span>Ecosistema Financiero en Venezuela</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-[#0B132B] tracking-tight mb-4">
            Banner de Servicios y <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-700">Infraestructura Fintech</span>
          </h2>
          <p className="text-slate-600 font-light text-sm sm:text-base">
            Explore los pilares de la transformación digital, desde BNPL y Pago Móvil hasta pasarelas de pago y custodia en divisas.
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
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-medium">
              {slide.icon}
              <span>{slide.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              {slide.title}
            </h3>

            <p className="text-emerald-400 font-medium text-sm sm:text-base">
              {slide.subtitle}
            </p>

            <p className="text-slate-300 font-light text-xs sm:text-sm leading-relaxed">
              {slide.description}
            </p>

            <div className="flex items-center gap-4 pt-4">
              <button 
                onClick={() => alert(`Explorando detalles de: ${slide.title}`)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00E676] text-slate-950 font-medium text-xs tracking-wide shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all flex items-center gap-2"
              >
                <span>Ver Directorio Oficial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-xs text-slate-300 font-light px-2">
              {currentIndex + 1} / {slides.length}
            </div>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
