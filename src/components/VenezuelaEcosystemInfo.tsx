import React from 'react';
import { CreditCard, Landmark, Smartphone, Globe, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const VenezuelaEcosystemInfo: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-light text-[#0B132B] tracking-tight mb-6">
            Ecosistema Financiero en <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-700">Venezuela</span>
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed">
            El sistema de servicios financieros en Venezuela se ha transformado notablemente en los últimos años, pasando de la banca tradicional de taquilla a una economía altamente digitalizada respaldada por el sistema de Pago Móvil, las billeteras en divisas, el modelo BNPL y las pasarelas de pago para e-commerce.
          </p>
        </div>

        {/* Secciones detalladas */}
        <div className="space-y-12">
          
          {/* 1. Crédito Digital y BNPL */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-emerald-500/20 bg-white shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <CreditCard className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#0B132B]">1. Crédito Digital y "Compra Ahora, Paga Después" (BNPL)</h3>
                <p className="text-xs text-slate-500">Ante la contracción del crédito bancario tradicional con tarjetas, el financiamiento al consumo lidera el mercado</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-sm font-medium text-[#0B132B] mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Cashea</span>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  La plataforma líder de BNPL en el país. Permite a los usuarios comprar productos en comercios afiliados pagando una inicial y el resto en cuotas sin intereses.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-sm font-medium text-[#0B132B] mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Kredi</span>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Enfocada en financiamiento y crédito ágil para consumo, facilitando liquidez directa y estructurada para los clientes afiliados.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Banca Tradicional y Servicios Digitales (SUDEBAN) */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-blue-500/20 bg-white shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
                <Landmark className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#0B132B]">2. Banca Tradicional y Servicios Digitales (Regulados por SUDEBAN)</h3>
                <p className="text-xs text-slate-500">Adaptación de infraestructura para pagos instantáneos en bolívares (P2P, P2C, C2P) y cuentas custodia en divisas</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-4 font-medium text-[#0B132B]">Entidad Financiera</th>
                    <th className="p-4 font-medium text-[#0B132B]">Servicios Destacados</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-medium text-emerald-700">Banesco</td>
                    <td className="p-4 text-slate-600 font-light">Pago Móvil masivo, Banesco PagoDirecto, cuentas verdes/en divisas y API bancaria para empresas.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-emerald-700">Banco Mercantil</td>
                    <td className="p-4 text-slate-600 font-light">Plataforma TPAGO, cuentas en divisas, integración API con comercios e-commerce.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-emerald-700">Bancamiga</td>
                    <td className="p-4 text-slate-600 font-light">Innovación en puntos de venta (POS) Android con cobro en divisas/cripto y tarjetas de débito internacionales.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-emerald-700">Banco Nacional de Crédito (BNC)</td>
                    <td className="p-4 text-slate-600 font-light">Servicios corporativos, custodia de divisas y soluciones de cobro para comercios.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-emerald-700">BBVA Provincial</td>
                    <td className="p-4 text-slate-600 font-light">Provinet web/móvil, cobro interactivo para empresas y soluciones P2P/C2P.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-emerald-700">Banco de Venezuela (BDV)</td>
                    <td className="p-4 text-slate-600 font-light">En línea BDV, PagomóvilBDV, procesamiento masivo y trámites biométricos (Biopago).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Billeteras Digitales, Tarjetas Prepadas y Pasarelas */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-emerald-500/20 bg-white shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Smartphone className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#0B132B]">3. Billeteras Digitales, Tarjetas Prepagadas y Pasarelas de Pago</h3>
                <p className="text-xs text-slate-500">Iniciativas fintech que facilitan mover dinero entre bolívares y divisas, comprar online o cobrar en negocios</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-medium text-[#0B132B] text-sm mb-2">Zinli & Wally</h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Billeteras digitales en dólares que emiten tarjetas de débito internacionales virtuales y físicas (Visa/Mastercard) para compras globales y locales.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-medium text-[#0B132B] text-sm mb-2">Ubii Pagos (Ubii App)</h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Aplicación y pasarela de pago local que conecta tarjetas de débito/crédito y Pago Móvil con tarjetas prepagadas máster y pagos en locales comerciales.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-medium text-[#0B132B] text-sm mb-2">C2P / Pasarelas e-Commerce</h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Integraciones como PagoFlash, MegaSoft, Mercantil Payment Gateway o Banesco PagoDirecto para procesar pagos automáticos en bolívares.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Remesas y Plataformas Transfronterizas */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-blue-500/20 bg-white shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#0B132B]">4. Remesas y Plataformas Transfronterizas</h3>
                <p className="text-xs text-slate-500">Debido a la migración y flujo de divisas, las empresas de transferencias y plataformas P2P son un pilar clave</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-medium text-[#0B132B] text-sm mb-2">Zoom Remesas / Western Union</h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Operador autorizado para el envío y recepción de remesas formales en taquilla o depósito bancario directo a tasa oficial BCV.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-medium text-[#0B132B] text-sm mb-2">El Dorado P2P</h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Plataforma descentralizada/P2P para intercambio de bolívares por dólares digitales (USDT, cUSD) y transferencias bancarias locales con custodia segura.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-medium text-[#0B132B] text-sm mb-2">Binance (P2P)</h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Uno de los mecanismos P2P con mayor volumen para la conversión directa de bolívares a criptoactivos estables y viceversa.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Procesamiento de Pagos y Puntos de Venta (POS) */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-emerald-500/20 bg-white shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Cpu className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#0B132B]">5. Procesamiento de Pagos y Puntos de Venta (POS)</h3>
                <p className="text-xs text-slate-500">Entidades dedicadas a la infraestructura transaccional de los comercios físicos e inteligentes</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-medium text-[#0B132B] text-sm mb-2">Procesadores Principales</h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  <strong>Credicard, Platco y Servitebca:</strong> Principales procesadores de transacciones con tarjeta de débito y crédito del país, garantizando interoperabilidad.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-medium text-[#0B132B] text-sm mb-2">Proveedores de POS Android</h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Empresas como <strong>Milpagos, Disca, PuntoYa</strong>, que comercializan terminales inteligentes inalámbricos integrados con múltiples bancos a la vez.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
