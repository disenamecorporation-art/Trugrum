import React, { useState } from 'react';
import { X, Lock, Mail, User as UserIcon, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'login' | 'register';
  onClose: () => void;
  onSuccessfulLogin: (email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode,
  onClose,
  onSuccessfulLogin,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSuccessMsg(mode === 'login' ? '¡Autenticado con éxito!' : '¡Cuenta cuántica creada con éxito!');
      
      setTimeout(() => {
        onSuccessfulLogin(email || 'inversionista@trugrum.com');
        onClose();
        setSuccessMsg('');
      }, 1000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-white border border-emerald-500/30 rounded-3xl p-8 shadow-2xl overflow-hidden">
        
        {/* Resplandor ambiental */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Cabecera del Modal */}
        <div className="text-center mb-8">
          <img 
            src="https://i.postimg.cc/RCQcTtzf/logoweb.png" 
            alt="Trugrum Logo" 
            className="h-12 w-auto mx-auto mb-4 filter drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]"
          />
          <h2 className="text-2xl font-light text-[#0B132B]">
            {mode === 'login' ? 'Acceder al Terminal Soberano' : 'Abrir Cuenta Cuántica'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {mode === 'login' ? 'Ingrese sus credenciales para gestionar liquidez' : 'Únase al nivel élite de la gestión de riqueza global'}
          </p>
        </div>

        {/* Pestañas de Modo */}
        <div className="flex bg-slate-100 p-1 rounded-xl mb-6 border border-slate-200">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2.5 rounded-lg text-xs font-light transition-all ${mode === 'login' ? 'bg-emerald-600 text-white font-medium shadow-sm' : 'text-slate-600 hover:text-[#0B132B]'}`}
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => setMode('register')}
            className={`flex-1 py-2.5 rounded-lg text-xs font-light transition-all ${mode === 'register' ? 'bg-emerald-600 text-white font-medium shadow-sm' : 'text-slate-600 hover:text-[#0B132B]'}`}
          >
            Registrarse
          </button>
        </div>

        {successMsg && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-800 text-xs flex items-center gap-3 animate-pulse">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-xs font-light text-slate-700 mb-1.5">Nombre Legal Completo</label>
              <div className="relative">
                <UserIcon className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="Alejandro Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-[#0B132B] text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-light text-slate-700 mb-1.5">Correo Corporativo o Privado</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type="email"
                required
                placeholder="inversionista@trugrum.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-[#0B132B] text-xs focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-light text-slate-700 mb-1.5">Contraseña Maestra / Passkey</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type="password"
                required
                placeholder="••••••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-[#0B132B] text-xs focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00E676] text-slate-950 font-medium text-xs tracking-wide shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2 mt-6"
          >
            {isLoading ? (
              <span>Autenticando Nodo Cuántico...</span>
            ) : (
              <>
                <span>{mode === 'login' ? 'Acceder al Terminal' : 'Inicializar Cuenta'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Opciones de inicio de sesión social */}
        <div className="mt-6 pt-6 border-t border-slate-200 text-center">
          <span className="text-[11px] text-slate-500 block mb-4">O autentíquese mediante SSO biométrico seguro</span>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => { setEmail('google.vip@trugrum.com'); }}
              className="py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs text-slate-700 flex items-center justify-center gap-2 transition-colors font-medium"
            >
              <span>Google SSO</span>
            </button>
            <button 
              onClick={() => { setEmail('apple.vip@trugrum.com'); }}
              className="py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs text-slate-700 flex items-center justify-center gap-2 transition-colors font-medium"
            >
              <span>Apple ID</span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6 text-[11px] text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Sesión Soberana Cifrada AES-256</span>
        </div>

      </div>
    </div>
  );
};
