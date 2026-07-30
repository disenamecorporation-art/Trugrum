import React, { useState } from 'react';
import { X, Sparkles, Send, Bot, User, ShieldCheck, ArrowRight } from 'lucide-react';

interface AiAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export const AiAdvisorModal: React.FC<AiAdvisorModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: 'Saludos. Soy Trugrum AI, su estratega de inteligencia de riqueza dedicado. ¿Cómo puedo asistir en su cartera o analizar las curvas de rendimiento macroeconómico hoy?',
      time: 'Justo ahora'
    }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { sender: 'user', text: input, time: 'Justo ahora' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);
      let reply = "Basado en las curvas de rendimiento soberano actuales y los índices de volatilidad multimoneda, recomiendo mantener una asignación del 45% en renta variable algorítmica y 30% en deuda soberana suiza. Su ratio Sharpe se mantiene óptimo en 3.84.";
      
      const lower = userMsg.text.toLowerCase();
      if (lower.includes('impuesto') || lower.includes('fiscal') || lower.includes('harvest') || lower.includes('cosecha')) {
        reply = "Nuestro algoritmo de recolección automatizada de pérdidas fiscales ha identificado actualmente $14,230 en compensaciones de capital no realizadas en sus tenencias de acciones. ¿Desea que ejecute la recolección ahora?";
      } else if (lower.includes('cripto') || lower.includes('bitcoin') || lower.includes('oro')) {
        reply = "La asignación en oro digital soberano se encuentra actualmente en 25%. La velocidad en cadena indica un impulso alcista con bajo riesgo sistémico.";
      } else if (lower.includes('transferencia') || lower.includes('giro') || lower.includes('wire')) {
        reply = "Todos los canales de transferencia global hacia Ginebra, Zúrich y Singapur operan con cero fricción y liquidación cuántica instantánea.";
      }

      setMessages(prev => [...prev, { sender: 'ai', text: reply, time: 'Justo ahora' }]);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-white border border-emerald-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[600px]">
        
        {/* Cabecera */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-emerald-600 animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-[#0B132B]">Estratega de Riqueza Trugrum AI</h3>
              <p className="text-xs text-emerald-700 font-light">Entrenado en telemetría macroeconómica y modelos de riesgo cuántico</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mensajes del Chat */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-emerald-600" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-4 rounded-2xl text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-emerald-600 text-white font-medium rounded-br-none shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none font-light shadow-sm'
                }`}
              >
                {msg.text}
                <div className={`text-[10px] mt-2 ${msg.sender === 'user' ? 'text-emerald-100' : 'text-slate-400'}`}>
                  {msg.time}
                </div>
              </div>
              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-emerald-700" />
                </div>
              )}
            </div>
          ))}

          {isThinking && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                <Bot className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-2xl text-xs text-slate-600 font-light flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Trugrum AI está procesando telemetría macroeconómica...</span>
              </div>
            </div>
          )}
        </div>

        {/* Formulario de Entrada */}
        <div className="p-4 bg-slate-50 border-t border-slate-200">
          <form onSubmit={handleSend} className="flex gap-3">
            <input
              type="text"
              placeholder="Pregunte sobre rendimiento de cartera, recolección fiscal o macro tendencias..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white border border-slate-300 text-[#0B132B] text-xs focus:outline-none focus:border-emerald-500 transition-colors shadow-sm"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Preguntar a IA</span>
            </button>
          </form>
          <div className="flex items-center justify-between mt-3 text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Sesión de Banca Privada Confidencial
            </span>
            <span>Asegurado vía Red Neural Trugrum</span>
          </div>
        </div>

      </div>
    </div>
  );
};
