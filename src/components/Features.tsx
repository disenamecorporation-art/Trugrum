import React from 'react';
import { UserPlus, Wallet, FileText, CheckCircle2, MessageCircle, LineChart, ArrowRight } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <UserPlus className="w-6 h-6 text-emerald-600" />,
      title: "Ir a registro",
      description: "Crea tu cuenta en nuestra plataforma de manera rápida y segura para acceder al fondo de inversión.",
      actionText: "Registrarse ahora"
    },
    {
      icon: <Wallet className="w-6 h-6 text-emerald-600" />,
      title: "Realiza tu importe",
      description: "Realiza tu importe desde 1 USDT, USDC en los datos de nuestro usuario BINANCE.",
      actionText: "Ver datos"
    },
    {
      icon: <FileText className="w-6 h-6 text-emerald-600" />,
      title: "Rellena el formulario",
      description: "Rellena el formulario y registra tu importe para que nuestro equipo valide tu ingreso.",
      actionText: "Completar"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: "Recibe tu comprobante",
      description: "Recibe tu comprobante y políticas del fondo, garantizando la transparencia de tu activo.",
      actionText: "Saber más"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-emerald-600" />,
      title: "Comunidad de WhatsApp",
      description: "Ingresa a nuestra comunidad de WhatsApp para interactuar y mantenerte informado.",
      actionText: "Unirme al grupo"
    },
    {
      icon: <LineChart className="w-6 h-6 text-emerald-600" />,
      title: "Informe diario",
      description: "Recibe el informe diario de tus activos y sigue el crecimiento sostenido de tu capital.",
      actionText: "Ver ejemplo"
    }
  ];

  return (
    <section id="paso-a-paso" className="py-28 bg-white relative overflow-hidden">
      
      {/* Elementos de brillo de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-light text-[#0B132B] tracking-tight mb-6">
            Paso a paso para formar parte de <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-[#00A859]">nuestra plataforma</span>
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg">
            Sigue estos simples pasos para integrar tu capital a nuestros proyectos emergentes y obtener rendimientos sostenidos.
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
                <span>{feature.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

