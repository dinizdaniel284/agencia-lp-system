'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site'
import { 
  Zap, 
  ArrowRight, 
  X,
  MousePointerClick,
  Cpu,
  Globe,
  CheckCircle,
  Sparkles,
  ShieldAlert,
  Info
} from 'lucide-react'

export default function LandingPage() {
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showMvpNotice, setShowMvpNotice] = useState(false) // Novo estado para o aviso
  const [dadosLead, setDadosLead] = useState({ nome: '', whatsapp: '' })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    setDadosLead({
      nome: formData.get('nome') as string,
      whatsapp: formData.get('whatsapp') as string
    })

    setTimeout(() => {
      setLoading(false)
      setShowSuccess(true)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Overlay de Sucesso */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative bg-slate-900 border border-white/10 p-8 rounded-[2.5rem] max-w-lg w-full shadow-2xl text-center space-y-6">
            <button 
              onClick={() => {
                setShowSuccess(false)
                setShowMvpNotice(false)
              }} 
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="bg-emerald-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle size={40} className="text-emerald-500" />
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-black italic tracking-tighter uppercase text-white">Solicitação Recebida!</h3>
              <p className="text-slate-400 text-sm">Nossa IA processou seus dados com sucesso.</p>
            </div>

            <div className="bg-[#0b141a] p-6 rounded-2xl text-left border-l-4 border-emerald-500 font-mono text-xs space-y-3">
              <p className="text-emerald-500 font-bold flex items-center gap-2">
                <Sparkles size={14} /> STATUS: CONEXÃO ESTABELECIDA
              </p>
              <div className="text-slate-300 space-y-1">
                <p><span className="text-blue-400">CLIENTE:</span> {dadosLead.nome.toUpperCase()}</p>
                <p><span className="text-blue-400">WHATSAPP:</span> {dadosLead.whatsapp}</p>
              </div>
            </div>

            {/* Aviso de MVP que aparece ao clicar no botão */}
            {showMvpNotice ? (
              <div className="bg-blue-600/20 border border-blue-500/40 p-5 rounded-2xl animate-in zoom-in duration-300">
                <div className="flex items-start gap-3 text-left">
                  <ShieldAlert className="text-blue-400 shrink-0" size={20} />
                  <div>
                    <p className="text-blue-100 font-bold text-sm mb-1">Ambiente de Demonstração</p>
                    <p className="text-[11px] text-blue-200/80 leading-relaxed">
                      Para sua segurança e conformidade com a Workana, links externos de contato direto estão desabilitados neste MVP. No sistema final, este botão redireciona instantaneamente para o seu WhatsApp comercial.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => setShowMvpNotice(true)}
                className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg shadow-emerald-900/20 active:scale-95"
              >
                Falar com Especialista Agora
              </button>
            )}
            
            {!showMvpNotice && (
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                Clique acima para testar o fluxo
              </p>
            )}
          </div>
        </div>
      )}

      {/* Background Decorativo */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-600/5 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl italic tracking-tighter text-white">
          <div className="bg-blue-600 p-1.5 rounded-lg shadow-lg shadow-blue-900/40">
            <Zap size={20} className="fill-white text-white" />
          </div>
          <span>{siteConfig.name.split(' ')[0]} <span className="text-blue-500 font-black uppercase tracking-tighter">CITY SOLUTIONS</span></span>
        </div>
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="hidden md:block text-[10px] font-bold text-slate-500 uppercase tracking-widest italic">Sistemas Ativos</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 py-12 lg:py-24 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 p-2 pr-5 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-widest">
            <span className="bg-blue-500 w-2 h-2 rounded-full" />
            Tecnologia de Conversão IA
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-white uppercase italic">
            {siteConfig.copy.headline.split(' ').slice(0, 3).join(' ')} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {siteConfig.copy.headline.split(' ').slice(3).join(' ')}
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-medium">
            {siteConfig.copy.subheadline}
          </p>
        </div>

        {/* Card do Formulário */}
        <div className="relative group animate-in fade-in zoom-in duration-1000 delay-200">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-[2.5rem] blur opacity-15 group-hover:opacity-30 transition duration-500" />
          <div className="relative bg-[#0f172a]/95 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Info size={18} className="text-blue-400" />
                </div>
                <h2 className="text-xl font-black italic uppercase tracking-tighter text-white">Solicitar Consultoria</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase ml-2">Nome Completo</label>
                <input name="nome" required className="w-full bg-slate-800/50 border border-white/5 rounded-2xl p-5 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder:text-slate-700" placeholder="Ex: Daniel Diniz" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase ml-2">WhatsApp</label>
                <input name="whatsapp" required className="w-full bg-slate-800/50 border border-white/5 rounded-2xl p-5 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder:text-slate-700" placeholder="(00) 00000-0000" />
              </div>
              
              <button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 group shadow-xl shadow-blue-900/20">
                {loading ? (
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        SINCRONIZANDO...
                    </div>
                ) : (
                  <>
                    <MousePointerClick size={20} />
                    {siteConfig.copy.cta.toUpperCase()}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<Zap className="text-blue-500" size={28} />}
            title="Performance Extrema"
            description="Sites que carregam em menos de 1 segundo. Mais velocidade, menos desistência de clientes."
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
          />
          <BenefitCard 
            icon={<Cpu className="text-emerald-500" size={28} />}
            title="Inteligência de Fluxo"
            description="Integramos seu WhatsApp com automações que qualificam o cliente antes de você atender."
            image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400"
          />
          <BenefitCard 
            icon={<Globe className="text-blue-400" size={28} />}
            title="SaaS White-Label"
            description="Tecnologia escalável pronta para ser replicada para qualquer nicho de mercado."
            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400"
          />
        </div>
      </section>

      <footer className="relative z-10 py-12 border-t border-white/5 text-center">
        <p className="text-[10px] font-mono tracking-[0.3em] text-slate-600 uppercase">
          {siteConfig.name} © 2026 | DINIZ CITY SOLUTIONS
        </p>
      </footer>
    </main>
  )
}

function BenefitCard({ icon, title, description, image }: { icon: React.ReactNode, title: string, description: string, image: string }) {
  return (
    <div className="group p-8 rounded-[2.5rem] bg-slate-900/50 border border-white/5 hover:border-blue-500/50 transition-all duration-500">
      <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-white italic tracking-tight">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>
      <div className="overflow-hidden rounded-2xl h-32 border border-white/5">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-20 group-hover:opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" />
      </div>
    </div>
  )
}
