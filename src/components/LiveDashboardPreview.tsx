import React, { useState } from 'react';
import { 
  TrendingUp, TrendingDown, ArrowUpRight, ArrowDownLeft, 
  Send, ShieldCheck, RefreshCw, Layers, CheckCircle2, AlertCircle, Sparkles
} from 'lucide-react';
import { Transaction, PortfolioAsset } from '../types';

export const LiveDashboardPreview: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'1D' | '1W' | '1M' | '1Y' | 'TODOS'>('1M');
  const [activeTab, setActiveTab] = useState<'overview' | 'send' | 'analytics' | 'vault'>('overview');
  
  // Estado para el formulario de envío
  const [recipient, setRecipient] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 'tx-1',
      title: 'Dividendo de Rendimiento Cuántico',
      category: 'Rendimiento Pasivo',
      amount: 4250.00,
      type: 'income',
      date: 'Hoy, 09:42 AM',
      status: 'Completed',
      icon: '📈'
    },
    {
      id: 'tx-2',
      title: 'Transferencia Bóveda Custodia Suiza',
      category: 'Tesorería',
      amount: -50000.00,
      type: 'transfer',
      date: 'Ayer, 14:15 PM',
      status: 'Secured',
      icon: '🛡️'
    },
    {
      id: 'tx-3',
      title: 'Alpha Venture Silicon Valley',
      category: 'Acciones',
      amount: -12500.00,
      type: 'investment',
      date: '28 de Jul, 2026',
      status: 'Completed',
      icon: '🚀'
    },
    {
      id: 'tx-4',
      title: 'Rendimiento Bonos Soberanos Globales',
      category: 'Bonos',
      amount: 1890.50,
      type: 'income',
      date: '26 de Jul, 2026',
      status: 'Completed',
      icon: '🌐'
    }
  ]);

  const assets: PortfolioAsset[] = [
    { symbol: 'AAPL', name: 'Renta Variable Cuántica Apple', allocation: 35, value: 500132.65, change24h: 2.4, color: 'bg-emerald-500' },
    { symbol: 'BTC/USD', name: 'Oro Digital Soberano', allocation: 25, value: 357237.60, change24h: 5.8, color: 'bg-blue-600' },
    { symbol: 'EUR/USD', name: 'Rendimiento Soberano Europeo', allocation: 20, value: 285790.08, change24h: -0.3, color: 'bg-purple-600' },
    { symbol: 'GOLD', name: 'Lingotes Físicos en Bóveda', allocation: 20, value: 285790.09, change24h: 0.8, color: 'bg-amber-500' },
  ];

  const handleSendMoney = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipient || !sendAmount) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setTransferSuccess(true);
      
      const newTx: Transaction = {
        id: `tx-${Date.now()}`,
        title: `Transferencia a ${recipient}`,
        category: 'Transferencia Bancaria',
        amount: -parseFloat(sendAmount),
        type: 'transfer',
        date: 'Justo ahora',
        status: 'Secured',
        icon: '💸'
      };

      setTransactions([newTx, ...transactions]);
      setRecipient('');
      setSendAmount('');

      setTimeout(() => setTransferSuccess(false), 4000);
    }, 1200);
  };

  return (
    <section id="preview" className="py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-light tracking-widest uppercase mb-4 shadow-sm">
            <span>Vista Previa del Terminal Interactivo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-[#0B132B] tracking-tight mb-6">
            Experimente el <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-[#00A859]">Shell de Trugrum</span>
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg">
            Pruebe nuestro terminal de inteligencia de riqueza en tiempo real. Monitoree activos, ejecute transferencias soberanas instantáneas y analice rendimientos en vivo.
          </p>
        </div>

        {/* Contenedor del Shell del Dashboard */}
        <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/30">
          
          {/* Barra Superior dentro del Terminal */}
          <div className="bg-white/90 px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="h-4 w-px bg-slate-300" />
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Nodo: TRU-QUANTUM-US-EAST-1</span>
              </div>
            </div>

            {/* Pestañas de Navegación del Terminal */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-1.5 rounded-lg text-xs font-light transition-all ${activeTab === 'overview' ? 'bg-emerald-600 text-white font-medium shadow-sm' : 'text-slate-600 hover:text-[#0B132B]'}`}
              >
                Resumen
              </button>
              <button
                onClick={() => setActiveTab('send')}
                className={`px-4 py-1.5 rounded-lg text-xs font-light transition-all ${activeTab === 'send' ? 'bg-emerald-600 text-white font-medium shadow-sm' : 'text-slate-600 hover:text-[#0B132B]'}`}
              >
                Transferir
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-4 py-1.5 rounded-lg text-xs font-light transition-all ${activeTab === 'analytics' ? 'bg-emerald-600 text-white font-medium shadow-sm' : 'text-slate-600 hover:text-[#0B132B]'}`}
              >
                Analítica
              </button>
              <button
                onClick={() => setActiveTab('vault')}
                className={`px-4 py-1.5 rounded-lg text-xs font-light transition-all ${activeTab === 'vault' ? 'bg-emerald-600 text-white font-medium shadow-sm' : 'text-slate-600 hover:text-[#0B132B]'}`}
              >
                Seguridad de Bóveda
              </button>
            </div>
          </div>

          {/* Contenido Principal del Terminal */}
          <div className="p-6 sm:p-8 bg-white/60">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                
                {/* Cabecera de Balance y Acciones Rápidas */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8">
                    <span className="text-xs text-slate-500 font-light tracking-wider uppercase">Liquidez Neta Consolidada</span>
                    <div className="text-3xl sm:text-5xl font-light text-[#0B132B] tracking-tight mt-1 mb-2">
                      $1,428,950.<span className="text-emerald-600">42</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <span className="text-emerald-700 flex items-center gap-1 font-medium bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                        <TrendingUp className="w-3.5 h-3.5" /> +4.2% Alpha
                      </span>
                      <span>Rendimiento Mensual Estimado: <strong className="text-[#0B132B]">$8,420.00</strong></span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex items-center justify-end gap-3">
                    <button
                      onClick={() => setActiveTab('send')}
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00E676] text-slate-950 font-medium text-xs tracking-wide shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Giro / Cripto</span>
                    </button>
                    <button 
                      onClick={() => alert('Auditoría de seguridad cuántica verificada con éxito. Los 24 nodos operando al 100%.')}
                      className="px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-light transition-all flex items-center gap-2 shadow-sm"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Auditoría</span>
                    </button>
                  </div>
                </div>

                {/* Sección de Gráfico Interactivo */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-sm font-medium text-[#0B132B] tracking-wide">Curva de Valoración de Cartera</h3>
                      <p className="text-xs text-slate-500">Índice compuesto en tiempo real a través de renta variable, bonos y oro</p>
                    </div>

                    <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
                      {(['1D', '1W', '1M', '1Y', 'TODOS'] as const).map((range) => (
                        <button
                          key={range}
                          onClick={() => setTimeRange(range)}
                          className={`px-3 py-1 rounded-lg text-xs transition-all ${timeRange === range ? 'bg-emerald-600 text-white font-medium shadow-sm' : 'text-slate-600 hover:text-[#0B132B]'}`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Gráfico SVG de Tendencia */}
                  <div className="h-64 w-full relative flex items-end">
                    <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 200">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 160 Q 100 120 200 140 T 400 80 T 600 50 T 800 20 L 800 200 L 0 200 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M 0 160 Q 100 120 200 140 T 400 80 T 600 50 T 800 20"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* Superposición de datos interactivos */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-500/30 text-xs shadow-sm">
                      <span className="text-slate-500">Pico de Rendimiento: </span>
                      <strong className="text-emerald-700">+$14,250.00 hoy</strong>
                    </div>
                  </div>
                </div>

                {/* Cuadrícula: Asignación y Transacciones Recientes */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Asignación de Activos */}
                  <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-sm font-medium text-[#0B132B] tracking-wide mb-4 flex items-center justify-between">
                      <span>Asignación de Activos Cuánticos</span>
                      <Layers className="w-4 h-4 text-emerald-600" />
                    </h3>
                    
                    <div className="space-y-4">
                      {assets.map((asset, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-700 font-medium">{asset.name} ({asset.symbol})</span>
                            <span className="text-[#0B132B] font-semibold">${asset.value.toLocaleString()} ({asset.allocation}%)</span>
                          </div>
                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
                            <div className={`${asset.color} h-full rounded-full`} style={{ width: `${asset.allocation}%` }} />
                          </div>
                          <div className="flex justify-between text-[11px] text-slate-500">
                            <span>Peso de asignación</span>
                            <span className={asset.change24h >= 0 ? 'text-emerald-700 font-medium' : 'text-red-600 font-medium'}>
                              {asset.change24h >= 0 ? `+${asset.change24h}%` : `${asset.change24h}%`} 24h
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transacciones Recientes */}
                  <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-sm font-medium text-[#0B132B] tracking-wide mb-4 flex items-center justify-between">
                      <span>Actividades del Libro Soberano</span>
                      <span className="text-xs text-emerald-700 font-light">Cifrado e Inmutable</span>
                    </h3>

                    <div className="space-y-3">
                      {transactions.map((tx) => (
                        <div key={tx.id} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-500/30 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-lg">
                              {tx.icon}
                            </div>
                            <div>
                              <div className="text-xs font-medium text-[#0B132B]">{tx.title}</div>
                              <div className="text-[11px] text-slate-500 font-light">{tx.date} • {tx.category}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-xs font-medium ${tx.amount > 0 ? 'text-emerald-700' : 'text-slate-800'}`}>
                              {tx.amount > 0 ? `+$${tx.amount.toLocaleString()}` : `-$${Math.abs(tx.amount).toLocaleString()}`}
                            </div>
                            <span className="inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-800 font-medium">
                              {tx.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            )}

            {activeTab === 'send' && (
              <div className="max-w-xl mx-auto py-8">
                <div className="bg-white p-8 rounded-3xl border border-emerald-500/30 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                      <Send className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#0B132B]">Giro Global Instantáneo y Transferencia Cripto</h3>
                      <p className="text-xs text-slate-500">Cero comisión cambiaria • Liquidación cuántica inmediata</p>
                    </div>
                  </div>

                  {transferSuccess && (
                    <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-800 text-xs flex items-center gap-3 animate-pulse">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Transferencia verificada con éxito y liquidada a través del nodo soberano cuántico.</span>
                    </div>
                  )}

                  <form onSubmit={handleSendMoney} className="space-y-6">
                    <div>
                      <label className="block text-xs font-light text-slate-700 mb-2">IBAN del Destinatario, Billetera o Correo</label>
                      <input
                        type="text"
                        required
                        placeholder="ej. TRU-8829-SWISS-VAULT"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-[#0B132B] text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-light text-slate-700 mb-2">Monto</label>
                        <input
                          type="number"
                          required
                          placeholder="10,000.00"
                          value={sendAmount}
                          onChange={(e) => setSendAmount(e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-[#0B132B] text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-light text-slate-700 mb-2">Moneda</label>
                        <select
                          value={currency}
                          onChange={(e) => setCurrency(e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-[#0B132B] text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                        >
                          <option value="USD">USD ($)</option>
                          <option value="EUR">EUR (€)</option>
                          <option value="GBP">GBP (£)</option>
                          <option value="CHF">CHF (₣)</option>
                          <option value="BTC">BTC (₿)</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
                      <div className="flex justify-between">
                        <span>Tarifa de Red:</span>
                        <span className="text-emerald-700 font-medium">Gratis (Beneficio Élite Cuántica)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tiempo Estimado de Compensación:</span>
                        <span className="text-[#0B132B] font-medium">&lt; 0.02 segundos</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00E676] text-slate-950 font-medium text-xs tracking-wide shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-2"
                    >
                      {isSending ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Verificando Firma Cuántica...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Ejecutar Transferencia Soberana</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-xs text-slate-500">Ratio Sharpe</span>
                    <div className="text-3xl font-light text-[#0B132B] mt-1">3.84</div>
                    <span className="text-xs text-emerald-700 mt-2 block">+12% vs índice de referencia S&P 500</span>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-xs text-slate-500">Caída Máxima (3A)</span>
                    <div className="text-3xl font-light text-emerald-700 mt-1">-1.2%</div>
                    <span className="text-xs text-slate-500 mt-2 block">Perfil de volatilidad extremadamente bajo</span>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-xs text-slate-500">Alpha Algorítmico</span>
                    <div className="text-3xl font-light text-[#0B132B] mt-1">+14.8%</div>
                    <span className="text-xs text-emerald-700 mt-2 block">Optimizado por Trugrum AI</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <h3 className="text-lg font-light text-[#0B132B] mb-2">Simulación Macroeconómica Predictiva</h3>
                  <p className="text-xs text-slate-600 max-w-xl mx-auto mb-6">
                    Trugrum AI ejecuta 100,000 simulaciones de Monte Carlo cada 60 segundos en todas las decisiones de tasas de interés soberanas globales.
                  </p>
                  <button 
                    onClick={() => alert('Simulación de Monte Carlo actualizada. Cartera optimizada para recortes de tasas en el Q3.')}
                    className="px-6 py-3 rounded-xl bg-emerald-600 text-white text-xs font-medium shadow-sm hover:bg-emerald-700 transition-all"
                  >
                    Ejecutar Simulación Monte Carlo Reciente
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'vault' && (
              <div className="max-w-2xl mx-auto py-6 space-y-6">
                <div className="bg-white p-8 rounded-3xl border border-emerald-500/30 shadow-xl text-center space-y-4">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-light text-[#0B132B]">Bóvedas Soberanas de Grado Militar</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sus activos están aislados en bóvedas de custodia soberana desconectadas de la red en Ginebra, Zúrich y Singapur, respaldadas por $1,000 Millones en seguro de especie.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 text-left">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-xs text-slate-500">Estándar de Cifrado</span>
                      <div className="text-sm font-medium text-emerald-700 mt-1">Post-Cuántico AES-256</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-xs text-slate-500">Verificación Biométrica</span>
                      <div className="text-sm font-medium text-emerald-700 mt-1">FIDO2 / Llave Hardware</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
