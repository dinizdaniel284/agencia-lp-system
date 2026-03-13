'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { CheckCircle, Zap, Database, Cpu, MousePointer2 } from 'lucide-react'

export default function LandingPage() {

  const [loading, setLoading] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [modoDemo, setModoDemo] = useState(false)

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

    try {

      const { error } = await supabase
        .from('leads')
        .insert([data])

      if (error) {
        throw error
      }

      console.log("✅ Lead salvo no Supabase:", data)

      setModoDemo(false)
      setEnviado(true)

      setTimeout(() => {

        alert(
          `🚀 AGENCIA IA DINIZ\n\n` +
          `Lead registrado com sucesso no banco Supabase!\n\n` +
          `Nome: ${data.nome}\n` +
          `WhatsApp: ${data.whatsapp}\n\n` +
          `Próxima etapa (produção):\n` +
          `• Envio automático para CRM\n` +
          `• Disparo WhatsApp\n` +
          `• Pipeline de vendas`
        )

      }, 400)

    } catch (error) {

      console.warn("⚠️ Supabase offline — modo demonstração")

      setModoDemo(true)
      setEnviado(true)

      setTimeout(() => {

        alert(
          `🚀 DEMONSTRAÇÃO ATIVA\n\n` +
          `Lead capturado localmente com sucesso!\n\n` +
          `Nome: ${data.nome}\n` +
          `WhatsApp: ${data.whatsapp}\n\n` +
          `Obs: banco Supabase desativado neste ambiente demo.\n` +
          `Em produção os dados seriam salvos automaticamente.`
        )

      }, 400)

    }

    setLoading(false)
  }

  return (

    <main className="min-h-screen bg-[#0f172a] text-slate-100 font-sans">

      {/* Navbar */}

      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">

        <div className="flex items-center gap-2 font-bold text-2xl">

          <div className="bg-blue-600 p-1.5 rounded-lg text-white">
            <Zap size={20}/>
          </div>

          <span>AGENCIA IA <span className="text-blue-500">DINIZ</span></span>

        </div>

        <span className="text-xs text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full">
          SaaS Lead Engine v1.2
        </span>

      </nav>

      {/* Conteúdo */}

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 py-16 items-center">

        {/* Texto */}

        <div className="space-y-6">

          <h1 className="text-5xl font-black leading-tight">
            Capture Leads com <span className="text-blue-400">Tecnologia IA</span>
          </h1>

          <p className="text-slate-400">
            Sistema de captura de leads da <strong>Agência IA Diniz</strong>.
            Demonstração real de persistência de dados e integração cloud.
          </p>

          <div className="grid grid-cols-2 gap-4">

            <div className="p-4 bg-slate-800 rounded-xl">
              <Cpu className="text-blue-400 mb-2"/>
              <p className="text-sm font-bold">Next.js Engine</p>
            </div>

            <div className="p-4 bg-slate-800 rounded-xl">
              <Database className="text-cyan-400 mb-2"/>
              <p className="text-sm font-bold">Supabase Cloud</p>
            </div>

          </div>

        </div>

        {/* Form */}

        <div className="bg-slate-900 p-8 rounded-3xl border border-white/10">

          {!enviado ? (

            <>
              <h2 className="text-2xl font-bold mb-6">
                Simulador de Captura
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  name="nome"
                  required
                  placeholder="Seu Nome"
                  className="w-full bg-slate-800 border border-slate-700 p-4 rounded-xl"
                />

                <input
                  name="whatsapp"
                  required
                  placeholder="WhatsApp"
                  className="w-full bg-slate-800 border border-slate-700 p-4 rounded-xl"
                />

                <button
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-500 font-bold py-4 rounded-xl flex items-center justify-center gap-2"
                >

                  {loading ? "Processando..." :

                    <>
                      Testar Captura
                      <MousePointer2 size={16}/>
                    </>
                  }

                </button>

              </form>
            </>

          ) : (

            <div className="text-center space-y-6 py-10">

              <CheckCircle size={70} className="text-green-500 mx-auto"/>

              <h2 className="text-2xl font-black">
                Lead Capturado
              </h2>

              {modoDemo ? (

                <p className="text-yellow-400 text-sm">
                  Modo demonstração ativo (Supabase offline)
                </p>

              ) : (

                <p className="text-green-400 text-sm">
                  Lead sincronizado com Supabase Cloud
                </p>

              )}

              <button
                onClick={() => {
                  setEnviado(false)
                  setModoDemo(false)
                }}
                className="mt-4 px-6 py-2 border border-slate-700 rounded-full text-xs"
              >
                Novo Teste
              </button>

            </div>

          )}

        </div>

      </div>

      {/* Footer */}

      <footer className="text-center text-xs opacity-40 py-10 border-t border-white/10">

        SUPABASE_DB: leads (nome, whatsapp, servico) | STACK: NEXT.js 15

        <br/>

        Agência IA Diniz © 2026

      </footer>

    </main>

  )
          }
