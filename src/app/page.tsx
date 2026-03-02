'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { MessageCircle, CheckCircle, ShieldCheck, Zap, Database, Cpu, MousePointer2 } from 'lucide-react'

export default function LandingPage() {
  const [loading, setLoading] = useState(false)
  const [enviado, setEnviado] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    
    const formData = new FormData(e.currentTarget)
    
    // DADOS SINCRONIZADOS COM O NOVO SQL (nome, whatsapp, servico, pagina_id)
    const data = {
      nome: formData.get('nome') as string,
      whatsapp: formData.get('whatsapp') as string,
      servico: "Consultoria IA Diniz",
      pagina_id: "MVP_WORKANA_V1"
    }

    // Tenta salvar no Supabase
    const { error } = await supabase.from('leads').insert([data])

    if (!error) {
      setEnviado(true)
      console.log("✅ Dados gravados com sucesso no Supabase!");
      
      // Alerta estratégico para mostrar ao cliente da Workana
      setTimeout(() => {
        alert(
          `🚀 AGENCIA IA DINIZ - DEMO ATIVA\n\n` +
          `Status: Lead de "${data.nome}" registrado com sucesso no Banco de Dados!\n\n` +
          `Lógica de Automação: Em produção, o sistema dispararia agora o redirecionamento para o WhatsApp.\n\n` +
          `(Redirecionamento externo bloqueado para conformidade com a Workana).`
        )
      }, 400)
    } else {
      // Se ainda der erro, o alert vai dizer exatamente o porquê
      alert(`⚠️ Erro de Banco: ${error.message}\n\nVerifique se rodou o comando SQL no Supabase.`);
      console.error("Erro Supabase:", error)
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Background Decorativo - Efeito Aura */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-indigo-600/10 blur-[100px] rounded-full" />
      </div>

      {/* Header / Navbar */}
      <nav className="relative z-10 p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter italic">
          <div className="bg-blue-600 p-1.5 rounded-lg shadow-lg shadow-blue-500/40 text-white">
            <Zap size={22} className="fill-white" />
          </div>
          <span>AGENCIA IA <span className="text-blue-500">DINIZ</span></span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest font-bold text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
            Protótipo SaaS v1.2 - Conectado
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 py-12 items-center">
        
        {/* Lado Esquerdo: Texto de Venda */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 p-1 pr-4 rounded-full text-sm font-medium">
            <span className="bg-blue-600 px-2.5 py-1 rounded-full text-xs animate-pulse font-bold">LIVE</span>
            <span>Integração Supabase Real-time Cloud</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-white">
            Capture Leads com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic text-nowrap">Tecnologia IA</span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Desenvolvemos o motor de vendas da <strong>Agencia IA Diniz</strong>. 
            Este protótipo demonstra a persistência de dados instantânea e a interface de alta conversão.
          </p>

          {/* Bento Grid Simples de Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-md">
              <Cpu className="text-blue-400 mb-2" size={24} />
              <h3 className="font-bold text-sm text-white text-nowrap">Next.js 15 Fast</h3>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-md">
              <Database className="text-cyan-400 mb-2" size={24} />
              <h3 className="font-bold text-sm text-white text-nowrap">Cloud DB Connected</h3>
            </div>
          </div>
        </div>

        {/* Lado Direito: O Formulário High-End */}
        <div className="relative group animate-in fade-in zoom-in duration-700 delay-200">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] shadow-2xl">
            {!enviado ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Simulador de Captura</h2>
                  <p className="text-slate-400 text-sm italic">Os dados abaixo serão gravados no banco em tempo real.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Seu Nome</label>
                    <input name="nome" required className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder:text-slate-600" placeholder="Ex: Cliente Workana" />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">WhatsApp (Telefone)</label>
                    <input name="whatsapp" required className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white" placeholder="(11) 99999-9999" />
                  </div>

                  <button 
                    disabled={loading} 
                    className="group w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/20 active:scale-[0.97]"
                  >
                    {loading ? 'Processando DB...' : (
                      <>
                        TESTAR INTEGRAÇÃO
                        <MousePointer2 size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12 space-y-6 animate-in zoom-in duration-300">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-green-500 blur-2xl opacity-20 animate-pulse"></div>
                  <CheckCircle size={80} className="text-green-500 relative z-10 mx-auto" />
                </div>
                <h2 className="text-3xl font-black text-white italic tracking-tighter">DADOS SINCRONIZADOS</h2>
                <div className="space-y-4">
                  <p className="text-slate-400 leading-relaxed max-w-sm mx-auto">
                    O lead foi registrado instantaneamente na tabela <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-400">leads</code> do Supabase Cloud.
                  </p>
                  <div className="bg-blue-500/10 border border-blue-500/30 p-3 rounded-xl inline-block">
                     <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">Aguardando Aprovação Workana</span>
                  </div>
                </div>
                <button 
                  onClick={() => setEnviado(false)} 
                  className="mt-6 px-6 py-2 border border-slate-700 rounded-full text-[10px] font-bold hover:bg-slate-800 transition-colors uppercase tracking-widest text-slate-400"
                >
                  Novo Teste de Sincronia
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Técnico */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/5 mt-12 bg-slate-950/50 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
          <div className="text-[10px] font-mono tracking-tighter">SUPABASE_DB: leads (nome, whatsapp, servico) | STACK: NEXT.JS 15 (TURBOPACK)</div>
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold">Agência IA Diniz © 2026 - Tecnologia White-label</div>
        </div>
      </footer>
    </main>
  )
}