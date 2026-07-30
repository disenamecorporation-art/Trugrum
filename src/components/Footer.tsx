import React from 'react';
import { ShieldCheck, Globe2, Lock } from 'lucide-react';

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
              Trugrum.com es la principal plataforma de inteligencia de riqueza soberana, que ofrece seguridad de grado cuántico y alfa algorítmica predictiva para instituciones globales y banca privada.
            </p>
            <div className="flex items-center gap-3 text-xs text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-medium">Todos los Sistemas Operacionales (24 Nodos Activos)</span>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-medium tracking-widest text-white">Plataforma</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Inteligencia de Riqueza</a></li>
              <li><a href="#preview" className="hover:text-emerald-400 transition-colors">Terminal en Vivo</a></li>
              <li><a href="#security" className="hover:text-emerald-400 transition-colors">Bóvedas Cuánticas</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Cosecha Fiscal</a></li>
            </ul>
          </div>

          {/* Regiones Soberanas */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-medium tracking-widest text-white">Custodia Soberana</h4>
            <ul className="space-y-2 text-xs font-light">
              <li className="flex items-center gap-2"><Globe2 className="w-3.5 h-3.5 text-emerald-400" /> Bóveda Ginebra, Suiza</li>
              <li className="flex items-center gap-2"><Globe2 className="w-3.5 h-3.5 text-emerald-400" /> Nodo Custodia Zúrich</li>
              <li className="flex items-center gap-2"><Globe2 className="w-3.5 h-3.5 text-emerald-400" /> Centro Soberano Singapur</li>
              <li className="flex items-center gap-2"><Globe2 className="w-3.5 h-3.5 text-emerald-400" /> Centro Cuántico Nueva York</li>
            </ul>
          </div>

          {/* Cumplimiento y Seguridad */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-medium tracking-widest text-white">Cumplimiento y Seguridad</h4>
            <div className="p-4 rounded-2xl bg-[#1C2541]/80 border border-white/10 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Regulado por SEC & FCA</span>
              </div>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Protegido por más de $1,000M en seguro de especie y claves criptográficas post-cuánticas.
              </p>
            </div>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-slate-400">
          <div>
            © 2026 Trugrum.com. Todos los derechos soberanos reservados.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Carta de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio Soberano</a>
            <a href="#" className="hover:text-white transition-colors">Divulgación de Seguridad</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
