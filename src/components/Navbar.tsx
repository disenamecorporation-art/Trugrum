import React, { useState } from 'react';
import { ShieldCheck, User, LogIn, Sparkles, KeyRound, UserPlus, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
  isLoggedIn: boolean;
  userEmail: string;
  onLogout: () => void;
  activeTab: 'landing' | 'dashboard';
  setActiveTab: (tab: 'landing' | 'dashboard') => void;
  onOpenAiAdvisor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAuth,
  isLoggedIn,
  userEmail,
  onLogout,
  activeTab,
  setActiveTab,
  onOpenAiAdvisor,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-emerald-500/15 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo sin texto */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setActiveTab('landing')}
              className="flex items-center focus:outline-none group transition-transform duration-300 hover:scale-105"
            >
              <img 
                src="https://i.postimg.cc/RCQcTtzf/logoweb.png" 
                alt="Trugrum Logo" 
                className="h-10 sm:h-14 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(16,185,129,0.35)]"
              />
            </button>

            {/* Enlaces de Navegación */}
            <div className="hidden md:flex items-center space-x-8 font-light text-sm tracking-wide text-slate-700">
              <button 
                onClick={() => setActiveTab('landing')}
                className={`transition-colors duration-200 ${activeTab === 'landing' ? 'text-emerald-600 font-medium' : 'hover:text-[#0B132B]'}`}
              >
                Inicio
              </button>
              <a href="#paso-a-paso" className="hover:text-emerald-600 transition-colors">
                Paso a paso
              </a>
              <a href="#areas-inversion" className="hover:text-emerald-600 transition-colors">
                Áreas de inversión
              </a>
              <a href="#contacto" className="hover:text-emerald-600 transition-colors">
                Contacto
              </a>
            </div>
          </div>

          {/* Botones de Acción con Iconos 3D Animados */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="hidden sm:flex items-center gap-3">
                <div className="flex flex-col text-right">
                  <span className="text-xs text-emerald-600 font-medium">Usuario Verificado</span>
                  <span className="text-[11px] text-slate-500">{userEmail.split('@')[0]}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-600 text-xs text-slate-600 border border-slate-200 transition-all font-medium"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <button
                  onClick={() => onOpenAuth('register')}
                  className="px-5 py-2.5 rounded-xl text-xs font-medium tracking-wide bg-gradient-to-r from-emerald-500 to-[#00E676] text-slate-950 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 flex items-center gap-2 group transform hover:-translate-y-0.5"
                >
                  <div className="w-6 h-6 rounded-lg bg-slate-950/15 flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-inner">
                    <UserPlus className="w-3.5 h-3.5 text-slate-950 animate-bounce" />
                  </div>
                  <span>Registro</span>
                </button>
              </div>
            )}
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 hover:text-emerald-600 focus:outline-none p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-emerald-500/15 shadow-xl py-4 px-4 flex flex-col space-y-4">
          <button 
            onClick={() => {
              setActiveTab('landing');
              setMobileMenuOpen(false);
            }}
            className={`text-left text-sm ${activeTab === 'landing' ? 'text-emerald-600 font-medium' : 'text-slate-700 hover:text-emerald-600'}`}
          >
            Inicio
          </button>
          <a 
            href="#paso-a-paso" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-slate-700 hover:text-emerald-600"
          >
            Paso a paso
          </a>
          <a 
            href="#areas-inversion" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-slate-700 hover:text-emerald-600"
          >
            Áreas de inversión
          </a>
          <a 
            href="#contacto" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-slate-700 hover:text-emerald-600"
          >
            Contacto
          </a>
          
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            {isLoggedIn ? (
              <button
                onClick={() => {
                  onLogout();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center px-4 py-3 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-600 text-sm text-slate-600 border border-slate-200 transition-all font-medium"
              >
                Cerrar Sesión
              </button>
            ) : (
              <button
                onClick={() => {
                  onOpenAuth('register');
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-center px-5 py-3 rounded-xl text-sm font-medium tracking-wide bg-gradient-to-r from-emerald-500 to-[#00E676] text-slate-950 transition-all flex items-center gap-2 group"
              >
                <div className="w-5 h-5 rounded-md bg-slate-950/15 flex items-center justify-center">
                  <UserPlus className="w-3 h-3 text-slate-950" />
                </div>
                <span>Registro</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
