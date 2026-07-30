import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Zap, Globe2, Award, Landmark, Smartphone, CreditCard } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  onExploreDashboard: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onExploreDashboard }) => {
  return (
    <div className="relative overflow-hidden pt-20 pb-32 lg:pt-28 lg:pb-40 bg-gradient-to-br from-[#0B132B] via-[#131E3D] to-[#0B132B] text-slate-100">
      
      {/* Degradados ambientales de fondo ricos en azul y turquesa (NO colores del logo) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-r from-blue-600/25 to-indigo-600/20 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Titular y CTA */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Titular */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] mb-6">
              La Transformación Digital de la <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">Banca y Finanzas en Venezuela</span>
            </h1>

            {/* Subtítulo con la nueva información solicitada */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
              El sistema de servicios financieros en Venezuela se ha transformado notablemente en los últimos años, pasando de la banca tradicional de taquilla a una economía altamente digitalizada respaldada por el sistema de Pago Móvil, las billeteras en divisas, el modelo BNPL (Buy Now, Pay Later) y las pasarelas de pago para e-commerce.
            </p>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button
                onClick={onGetStarted}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-medium tracking-wide text-sm hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Acceder al Directorio y Registro</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreDashboard}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#1C2541]/90 hover:bg-[#1C2541] text-blue-300 border border-blue-500/40 hover:border-blue-500/70 font-light text-sm tracking-wide shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span>Explorar Servicios y Bancos</span>
              </button>
            </div>

            {/* Métricas del Ecosistema */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-500/20 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-light text-white">Cashea / Kredi</div>
                <div className="text-xs text-slate-400 font-light mt-1">Líderes BNPL</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-light text-blue-400">P2P & C2P</div>
                <div className="text-xs text-slate-400 font-light mt-1">Pago Móvil Masivo</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-light text-white">SUDEBAN</div>
                <div className="text-xs text-slate-400 font-light mt-1">Regulación Bancaria</div>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta 3D Flotante Interactiva del Ecosistema */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Anillo de brillo de fondo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-emerald-500/30 rounded-3xl blur-2xl transform rotate-6 scale-95" />

            {/* Tarjeta de Terminal de Cristal */}
            <div className="relative w-full max-w-md bg-[#162038]/95 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl shadow-2xl border border-blue-500/40 text-slate-100 animate-float">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-blue-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white tracking-wide">Ecosistema Financiero</h3>
                    <p className="text-xs text-blue-300 font-light">Venezuela 2026 • Digitalizado</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-medium border border-blue-500/30">
                  Activo
                </span>
              </div>

              {/* Pilares Clave */}
              <div className="space-y-4 mb-6">
                
                <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">Crédito Digital (BNPL)</div>
                      <div className="text-[11px] text-slate-400">Cashea & Kredi (Cuotas sin interés)</div>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-medium">Líder</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <Landmark className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">Banca y Pago Móvil</div>
                      <div className="text-[11px] text-slate-400">Banesco, Mercantil, Bancamiga, BDV</div>
                    </div>
                  </div>
                  <span className="text-xs text-blue-400 font-medium">P2P/C2P</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">Billeteras & Remesas P2P</div>
                      <div className="text-[11px] text-slate-400">Zinli, Wally, El Dorado, Binance</div>
                    </div>
                  </div>
                  <span className="text-xs text-purple-400 font-medium">Global</span>
                </div>

              </div>

              {/* Insignia Flotante */}
              <div className="absolute -top-6 -right-6 bg-[#0B132B]/95 border border-blue-500/50 p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-float-delayed backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Globe2 className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Interoperabilidad</div>
                  <div className="text-xs font-medium text-white">100% Digital</div>
                </div>
              </div>

              {/* Pie de seguridad */}
              <div className="flex items-center justify-between pt-4 border-t border-blue-500/20 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-blue-400" />
                  Ecosistema Verificado
                </span>
                <span className="text-blue-400 font-medium">BCV & SUDEBAN</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
