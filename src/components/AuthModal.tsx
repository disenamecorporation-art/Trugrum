import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, DollarSign, FileText, Calendar, User as UserIcon, CheckCircle2, Globe, Phone, Mail, Hash, Key } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white border border-emerald-500/30 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Resplandor ambiental */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-5 h-full relative z-1">
          
          {/* Formulario (Izquierda) */}
          <div className="lg:col-span-3 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white/80 backdrop-blur-sm">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B132B] tracking-tight mb-2">
                Realiza tu importe y se parte de <span className="font-medium text-emerald-600">nuestra plataforma</span>
              </h2>
              <p className="text-sm text-slate-500 font-light">
                Completa el formulario para registrar tu importe. Tu solicitud será enviada directamente a nuestro equipo vía WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Sección Datos de Importe */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-emerald-700 border-b border-emerald-100 pb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" /> Datos de Importe
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Al enviar, serás redirigido a WhatsApp para validar tu solicitud.</span>
                </div>
              </div>
            </form>
          </div>

          {/* Información y QR (Derecha) */}
          <div className="lg:col-span-2 bg-[#0B132B] text-white p-8 sm:p-10 flex flex-col justify-center items-center relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />

            <div className="relative z-10 w-full flex flex-col items-center text-center space-y-8">
              
              <div className="text-center">
                <h3 className="text-xl font-light tracking-wide text-white mb-2">Cuenta Oficial</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full" />
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.15)] inline-block transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://i.postimg.cc/Y97cWyFG/trugrum-binance.png" 
                  alt="Binance QR"
                  className="w-48 h-48 object-contain rounded-xl"
                />
              </div>

              <div className="w-full space-y-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-md">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400 font-light flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-emerald-400" /> Binance ID:
                  </span>
                  <span className="font-medium text-white">1141026626</span>
                </div>
                <div className="h-px w-full bg-slate-800" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400 font-light flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-400" /> Correo:
                  </span>
                  <span className="font-medium text-white">informacion@trugrum.com</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-light text-slate-400 mt-4">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Verifique los datos antes de realizar la transacción.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
