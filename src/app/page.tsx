'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { siteConfig } from '@/config/site'
import { 
  Zap, 
  ArrowRight, 
  Smartphone, 
  MessageSquare,
  X,
  MousePointerClick,
  Cpu,
  Globe,
  CheckCircle,
  Database
} from 'lucide-react'

export default function LandingPage() {
  const [loading, setLoading] = useState(false)
  const [showDemo, setShowDemo] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [modoDemo, setModoDemo] = useState(false)
  const [dadosLead, setDadosLead] = useState({ nome: '', whatsapp: '' })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      nome: formData.get('nome') as string,
      whatsapp: formData.get('whatsapp') as string,
      servico: "Consultoria IA Diniz",
      pagina_id: "MVP_WORKANA_V1"
    }

    setDadosLead({ nome: data.nome, whatsapp: data.whatsapp })

    try {
      const { error } = await supabase
        .from('leads')
        .insert([data])

      if (error) throw error

      setModoDemo(false)
      setEnviado(true)
      setShowDemo(true)

    } catch (error) {
      console.warn("Supabase offline ou erro - ativando modo demo")
      setModoDemo(true)
      setEnviado(true)
      setShowDemo(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Overlay de Sucesso/Demonstração */}
      {showDemo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative bg-slate-900 border border-blue-500/30 p-8 rounded-[2.5rem] max-w-lg w-full shadow-2xl text-center space-y-4">
            <button onClick={() => setShowDemo(false)} className="absolute top-6 right-6 text-slate-500 hover:text-white">
              <X size={24} />
            </button>
            <div className="bg-emerald-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              {modoDemo ? <Database size={32} className="text-yellow-500" /> : <CheckCircle size={32} className="text-emerald-500" />}
            </div>
            <h3 className="text-2xl font-black italic tracking-tighter uppercase">
              {modoDemo ? "Lead Capturado (Demo)" : "Lead Sincronizado!"}
            </h3>
            <div className="bg-[#0b141a] p-5 rounded-2xl text-left border-l-4 border-emerald-500 font-mono text-xs space-y-2">
              <p className="text-emerald-500 font-bold">Status: {modoDemo ? "Offline/Local" : "Salvo no Supabase"}</p>
              <p className="text-slate-300"><span className="text-blue-400">Nome:</span> {dadosLead.nome}</p>
              <p className="text-slate-300"><span className="text-blue-400">WhatsApp:</span> {dadosLead.whatsapp}</p>
            </div>
            <button 
              onClick={() => window.open(siteConfig.links.whatsapp, '_blank')}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all"
            >
              Simular Contato via WhatsApp
            </button>
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
        <div className="flex items-center gap-2 font-bold text-xl italic tracking-tighter">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Zap size={20} className="fill-white text-white" />
          </div>
          <span>{siteConfig.name.split(' ')[0]} <span className="text-blue-500 font-black">CITY SOLUTIONS</span></span>
        </div>
        <span className="text-xs text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full">
          Lead Engine v1.2
        </span>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 py-12 lg:py-24 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 p-2 pr-5 rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
            <span className="bg-emerald-500 w-2 h-2 rounded-full animate-pulse" />
            Especialista em Conversão via WhatsApp
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-white">
            Páginas que geram <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Lucro Real</span> no seu bolso.
          </h1>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            {siteConfig.copy.subheadline}
          </p>
        </div>

        {/* Card do Formulário */}
        <div className="relative group animate-in fade-in zoom-in duration-1000 delay-200">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-[2.5rem] blur opacity-15 group-hover:opacity-30 transition duration-500" />
          <div className="relative bg-[#0f172a]/95 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
            <h2 className="text-2xl font-bold italic uppercase tracking-tighter text-white mb-6">Teste o Sistema</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input name="nome" required className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white" placeholder="Seu Nome" />
              <input name="whatsapp" required className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white" placeholder="Seu WhatsApp" />
              <button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 group">
                {loading ? 'PROCESSANDO...' : (
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

      {/* Seção de Benefícios */}
      <section id="beneficios" className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">Por que nos escolher?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto italic">Tecnologia de ponta para quem não aceita resultados medianos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<Zap className="text-blue-500" size={28} />}
            title="Carregamento Ultra-Rápido"
            description="Páginas otimizadas com Next.js. Site lento é dinheiro jogado fora. Aqui seu cliente não espera."
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
          />
          <BenefitCard 
            icon={<Cpu className="text-emerald-500" size={28} />}
            title="Automação IA & n8n"
            description="Integramos seu funil com IA e n8n para qualificar o lead antes mesmo de você abrir o chat."
            image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400"
          />
          <BenefitCard 
            icon={<Globe className="text-blue-400" size={28} />}
            title="Pronto para o Mundo"
            description="Sistemas escaláveis e seguros. De páginas locais a operações internacionais com suporte Web3."
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
    <div className="group p-8 rounded-[2rem] bg-slate-900/50 border border-white/5 hover:border-blue-500/50 transition-all duration-500">
      <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>
      <img src={image} alt={title} className="rounded-xl opacity-40 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" />
    </div>
  )
          }
