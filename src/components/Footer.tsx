import React from 'react';
import { ArrowRight, Phone, Mail, Instagram, Globe } from 'lucide-react';

interface FooterProps {
  onOpenAuth?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuth }) => {
  return (
    <footer className="bg-[#0B132B] text-slate-300 py-16 border-t border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Logo y Descripción */}
          <div className="md:col-span-5 space-y-4">
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

          {/* Contacto */}
          <div className="md:col-span-4 space-y-3" id="contacto">
            <h4 className="text-xs uppercase font-medium tracking-widest text-white">Contacto</h4>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <a href="https://wa.me/584244321000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  Whatsapp: +58 424-4321000
                </a>
              </li>
              <li>
                <a href="mailto:Informacion@trugrum.com" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  Email: Informacion@trugrum.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/Trugrum" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <Instagram className="w-3.5 h-3.5" />
                  Instagram: @Trugrum
                </a>
              </li>
              <li>
                <a href="https://www.Trugrum.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <Globe className="w-3.5 h-3.5" />
                  www.Trugrum.com
                </a>
              </li>
            </ul>
          </div>

          {/* Acceso */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-medium tracking-widest text-white">Acceso</h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <button onClick={onOpenAuth} className="hover:text-emerald-400 transition-colors text-left flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5" />
                  Registro de Usuario
                </button>
              </li>
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
