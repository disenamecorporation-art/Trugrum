import React from 'react';
import { ArrowRight, Zap, ShieldCheck, Sparkles } from 'lucide-react';

interface VenezuelaCtaBannerProps {
  onOpenAuth: () => void;
}

export const VenezuelaCtaBanner: React.FC<VenezuelaCtaBannerProps> = ({ onOpenAuth }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenedor de Llamada a la Acción con Degradado Azul - Verde */}
        <div className="relative rounded-3xl p-8 sm:p-16 bg-gradient-to-r from-blue-700 via-emerald-600 to-[#00E676] text-slate-950 shadow-2xl overflow-hidden text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/20">
          
          {/* Círculos de brillo decorativo */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          {/* Gran Texto */}
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/20 text-white text-xs font-medium uppercase tracking-widest backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-white animate-pulse" />
              <span>Ecosistema Financiero Venezolano 2026</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
              Transforme y Digitalice su <span className="font-semibold text-slate-950">Gestión de Capital Hoy</span>
            </h2>

            <p className="text-slate-100 font-light text-sm sm:text-base leading-relaxed">
              Conecte con Pago Móvil, pasarelas e-commerce, plataformas BNPL como Cashea y bóvedas en divisas con la máxima seguridad y agilidad.
            </p>
          </div>

          {/* Gran Botón Animado */}
          <div className="relative z-10 shrink-0">
            <button
              onClick={onOpenAuth}
              className="px-10 py-5 rounded-2xl bg-slate-950 text-white font-medium text-base tracking-wide shadow-[0_0_40px_rgba(0,0,0,0.4)] hover:shadow-[0_0_60px_rgba(0,0,0,0.6)] transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group"
            >
              <Sparkles className="w-5 h-5 text-emerald-400 animate-spin" />
              <span>Acceder al Ecosistema Soberano</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-3 text-xs text-slate-950/80 font-medium">
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              <span>Regulado & Verificado por SUDEBAN y Normas Internacionales</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
