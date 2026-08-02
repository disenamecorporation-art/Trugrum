import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, ShieldCheck, DollarSign, FileText, Calendar, User as UserIcon, CheckCircle2, Globe, Phone, Mail, Hash, Key } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'login' | 'register';
  onClose: () => void;
  onSuccessfulLogin: (email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    asset: 'USDT',
    monto: '',
    ordenId: '',
    periodo: '3 meses',
    nombre: '',
    identificacion: '',
    nacionalidad: '',
    whatsapp: '',
    email: '',
    binanceId: '',
    binanceEmail: ''
  });

  // Manejar el botón de flecha atrás del navegador para cerrar el modal sin salir de la página
  useEffect(() => {
    if (isOpen) {
      window.history.pushState({ modalOpen: true }, '');

      const handlePopState = () => {
        onClose();
      };

      window.addEventListener('popstate', handlePopState);
      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*NUEVO IMPORTE REGISTRADO*%0A%0A*DATOS DE IMPORTE*%0AAsset: ${formData.asset}%0AMonto: ${formData.monto}%0AID de orden: ${formData.ordenId}%0APeriodo: ${formData.periodo}%0A%0A*INFORMACION PERSONAL*%0ANombre: ${formData.nombre}%0AID: ${formData.identificacion}%0ANacionalidad: ${formData.nacionalidad}%0AWhatsApp: ${formData.whatsapp}%0AEmail: ${formData.email}%0ABinance ID: ${formData.binanceId}%0ABinance Email: ${formData.binanceEmail}`;
    window.open(`https://wa.me/584244321000?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white border border-emerald-500/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-4 sm:my-auto max-h-[90vh] flex flex-col">
        
        {/* Resplandor ambiental */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-md"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-5 min-h-full relative z-1">
            
            {/* Formulario (Izquierda) */}
            <div className="lg:col-span-3 p-4 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white/80 backdrop-blur-sm">
              <div className="mb-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 mb-3 sm:mb-4"
                >
                  <ArrowLeft className="w-4 h-4 text-emerald-600" />
                  <span>Volver a la página principal</span>
                </button>
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-light text-[#0B132B] tracking-tight mb-2 pr-8 sm:pr-0">
                  Realiza tu importe y se parte de <span className="font-medium text-emerald-600">nuestra plataforma</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-light">
                  Completa el formulario para registrar tu importe. Tu solicitud será enviada directamente a nuestro equipo vía WhatsApp.
                </p>
              </div>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              
              {/* Sección Datos de Importe */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-emerald-700 border-b border-emerald-100 pb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" /> Datos de Importe
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">USDT/USDC</label>
                    <select
                      name="asset"
                      value={formData.asset}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="USDT">USDT</option>
                      <option value="USDC">USDC</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Monto</label>
                    <input
                      type="text"
                      name="monto"
                      required
                      placeholder="Ej. 1000"
                      value={formData.monto}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">ID de orden</label>
                    <input
                      type="text"
                      name="ordenId"
                      required
                      placeholder="ID de transacción Binance"
                      value={formData.ordenId}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Período (meses)</label>
                    <select
                      name="periodo"
                      value={formData.periodo}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="3 meses">3 meses</option>
                      <option value="6 meses">6 meses</option>
                      <option value="9 meses">9 meses</option>
                      <option value="12 meses">12 meses</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Sección Información Personal */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-emerald-700 border-b border-emerald-100 pb-2 flex items-center gap-2">
                  <UserIcon className="w-4 h-4" /> Información Personal
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Nombre y apellidos</label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Número de identificación</label>
                    <input
                      type="text"
                      name="identificacion"
                      required
                      value={formData.identificacion}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Nacionalidad</label>
                    <input
                      type="text"
                      name="nacionalidad"
                      required
                      value={formData.nacionalidad}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Whatsapp</label>
                    <input
                      type="text"
                      name="whatsapp"
                      required
                      placeholder="0424 4321000"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">ID BINANCE</label>
                    <input
                      type="text"
                      name="binanceId"
                      required
                      value={formData.binanceId}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">CORREO BINANCE</label>
                    <input
                      type="email"
                      name="binanceEmail"
                      required
                      value={formData.binanceEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00E676] text-slate-950 font-medium text-sm tracking-wide shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
                >
                  <span>Enviar y Registrar Importe</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-slate-500 text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Al enviar, serás redirigido a WhatsApp para validar tu solicitud.</span>
                </div>
              </div>
            </form>
          </div>

          {/* Información y QR (Derecha) */}
          <div className="lg:col-span-2 bg-[#0B132B] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-center items-center relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />

            <div className="relative z-10 w-full flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
              
              <div className="text-center">
                <h3 className="text-xl font-light tracking-wide text-white mb-2">Cuenta Oficial</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full" />
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.15)] flex justify-center items-center mx-auto transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://i.postimg.cc/s2JKJfQG/qrtrugrum.png" 
                  alt="Binance QR"
                  className="w-44 h-44 sm:w-48 sm:h-48 object-contain rounded-xl mx-auto"
                />
              </div>

              <div className="w-full space-y-4 bg-slate-900/50 p-5 sm:p-6 rounded-2xl border border-slate-800 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-400 font-light flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-emerald-400" /> Binance ID:
                  </span>
                  <span className="font-medium text-white">1141026626</span>
                </div>
                <div className="h-px w-full bg-slate-800" />
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-400 font-light flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-400" /> Correo:
                  </span>
                  <span className="font-medium text-white break-all sm:break-normal">informacion@trugrum.com</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs font-light text-slate-400 mt-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Verifique los datos antes de realizar la transacción.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);
};
