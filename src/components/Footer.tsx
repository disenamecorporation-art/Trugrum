import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B132B] text-slate-300 py-16 border-t border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Logo y Descripción */}
          <div className="md:col-span-4 space-y-4">
            <img 
              src="https://i.postimg.cc/RCQcTtzf/logoweb.png" 
              alt="Trugrum Logo" 
              className="h-12 w-auto filter drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]"
            />
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Plataforma especializada en la transformación digital y el ecosistema de servicios financieros en Venezuela.
            </p>
            <div className="flex items-center gap-3 text-xs text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-medium">Ecosistema Activo y Operativo</span>
            </div>
          </div>

          {/* Menú Nav Esparcido 1 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-medium tracking-widest text-white">Navegación</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Ecosistema Financiero</a></li>
              <li><a href="#ecosystem" className="hover:text-emerald-400 transition-colors">Bancos y Servicios</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Tecnología Fintech</a></li>
            </ul>
          </div>

          {/* Menú Nav Esparcido 2 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-medium tracking-widest text-white">Servicios Clave</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#ecosystem" className="hover:text-emerald-400 transition-colors">Crédito Digital y BNPL (Cashea)</a></li>
              <li><a href="#ecosystem" className="hover:text-emerald-400 transition-colors">Banca SUDEBAN (P2P / C2P)</a></li>
              <li><a href="#ecosystem" className="hover:text-emerald-400 transition-colors">Billeteras y Remesas</a></li>
            </ul>
          </div>

          {/* Menú Nav Esparcido 3 */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-medium tracking-widest text-white">Acceso</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Iniciar Sesión</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Registro de Usuario</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Soporte Técnico</a></li>
            </ul>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-slate-400">
          <div>
            Hecho por Legaint Corporation. Todos los derechos reservados.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Seguridad</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
