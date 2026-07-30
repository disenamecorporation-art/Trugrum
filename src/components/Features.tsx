import React from 'react';
import { Cpu, BarChart3, Globe, Shield, Sparkles, Sliders, ArrowRight } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-emerald-600" />,
      title: "Inteligencia de Riqueza Automatizada",
      description: "Reequilibrio de cartera auto-optimizado impulsado por modelos de IA multivariable que anticipan los cambios del mercado antes de que se registren a nivel mundial."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
      title: "Analítica Global en Tiempo Real",
      description: "Telemetría de ultra baja latencia que transmite cada clase de activo, fondo de liquidez y curva de rendimiento directamente a su panel ejecutivo personal."
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      title: "Transferencias Transfronterizas Instantáneas",
      description: "Mueva capital entre más de 180 monedas soberanas instantáneamente con cero margen de cambio de divisas y compensación de cumplimiento automatizada."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: "Seguridad de Bóveda Cuántica",
      description: "Criptografía post-cuántica combinada con almacenamiento en frío con firmas múltiples y verificación de claves de hardware biométricas."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
      title: "Asesor IA Trugrum",
      description: "Su estratega de banca privada 24/7 entrenado con décadas de datos macroeconómicos para responder consultas complejas de impuestos y estructuración de activos."
    },
    {
      icon: <Sliders className="w-6 h-6 text-emerald-600" />,
      title: "Cosecha Fiscal Algorítmica",
      description: "La recolección automatizada continua de pérdidas fiscales compensa algorítmicamente las ganancias de capital para maximizar sus rendimientos compuestos netos."
    }
  ];

  return (
    <section id="features" className="py-28 bg-white relative overflow-hidden">
      
      {/* Elementos de brillo de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-light tracking-widest uppercase mb-4 shadow-sm">
            <span>Diseñado para Ultra-Alto Rendimiento</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-[#0B132B] tracking-tight mb-6">
            Diseñado para los Arquitectos de la <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-[#00A859]">Riqueza Global</span>
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg">
            Cada característica dentro de Trugrum está meticulosamente diseñada para eliminar la fricción, asegurar activos soberanos y componer alfa.
          </p>
        </div>

        {/* Cuadrícula de Características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/60 transition-colors">
                {feature.icon}
              </div>

              <h3 className="text-xl font-light text-[#0B132B] tracking-wide mb-3 group-hover:text-emerald-600 transition-colors">
                {feature.title}
              </h3>

              <p className="text-slate-600 font-light text-sm leading-relaxed mb-6">
                {feature.description}
              </p>

              <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Explorar protocolo</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
