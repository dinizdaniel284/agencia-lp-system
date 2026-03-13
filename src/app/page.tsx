'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import {
  CheckCircle,
  Zap,
  Database,
  Cpu,
  MousePointer2,
  MessageCircle
} from 'lucide-react'

export default function LandingPage() {

  const [loading, setLoading] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [modoDemo, setModoDemo] = useState(false)
  const [nomeLead, setNomeLead] = useState("")

  function abrirWhatsappDemo(nome: string) {

    const mensagem = encodeURIComponent(
      `Olá ${nome}, obrigado pelo contato!\n\n` +
      `Esta é uma demonstração do sistema automático da Agência IA Diniz.\n\n` +
      `Em produção este lead seria enviado automaticamente para o WhatsApp da empresa.`
    )

    const numeroFake = "5511999999999"

    const url = `https://wa.me/${numeroFake}?text=${mensagem}`

    window.open(url, "_blank")
  }

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

    setNomeLead(data.nome)

    try {

      const { error } = await supabase
        .from('leads')
        .insert([data])

      if (error) throw error

      console.log("Lead salvo no Supabase:", data)

      setModoDemo(false)
      setEnviado(true)

      setTimeout(() => {

        alert(
          `🚀 AGENCIA IA DINIZ\n\n` +
          `Lead registrado no banco Supabase!\n\n` +
          `Nome: ${data.nome}\n` +
          `WhatsApp: ${data.whatsapp}\n\n` +
          `Fluxo real:\n` +
          `• salvar no banco\n` +
          `• enviar para CRM\n` +
          `• notificar WhatsApp`
        )

      }, 400)

    } catch (error) {

      console.warn("Supabase offline - modo demo")

      setModoDemo(true)
      setEnviado(true)

      setTimeout(() => {

        alert(
          `🚀 DEMONSTRAÇÃO ATIVA\n\n` +
          `Lead capturado localmente!\n\n` +
          `Nome: ${data.nome}\n` +
          `WhatsApp: ${data.whatsapp}\n\n` +
          `Banco Supabase desativado neste ambiente demo.`
        )

      }, 400)

    }

    setLoading(false)

  }

  return (

    <main className="min-h-screen bg-[#0f172a] text-slate-100">

      <nav className="p-6 flex justify-between max-w-7xl mx-auto">

        <div className="flex items-center gap-2 font-bold text-2xl">

          <div className="bg-blue-600 p-2 rounded-lg">
            <Zap size={20}/>
          </div>

          AGENCIA IA <span className="text-blue-500">DINIZ</span>

        </div>

        <span className="text-xs text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full">
          Lead Engine v1.2
        </span>

      </nav>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 py-16 items-center">

        <div className="space-y-6">

          <h1 className="text-5xl font-black leading-tight">
            Capture Leads com <span className="text-blue-400">Tecnologia IA</span>
          </h1>

          <p className="text-slate-400">
            Sistema de captura de leads desenvolvido pela
            <strong> Agência IA Diniz</strong>.
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
                  placeholder="Seu nome"
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
                  className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
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

              {modoDemo ?

                <p className="text-yellow-400 text-sm">
                  Modo demonstração ativo
                </p>

                :

                <p className="text-green-400 text-sm">
                  Lead sincronizado com Supabase
                </p>

              }

              <button
                onClick={() => abrirWhatsappDemo(nomeLead)}
                className="w-full bg-green-600 hover:bg-green-500 py-3 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                Simular envio WhatsApp
                <MessageCircle size={18}/>
              </button>

              <button
                onClick={() => {
                  setEnviado(false)
                  setModoDemo(false)
                }}
                className="text-xs border border-slate-700 px-6 py-2 rounded-full"
              >
                Novo Teste
              </button>

            </div>

          )}

        </div>

      </div>

      <footer className="text-center text-xs opacity-40 py-10 border-t border-white/10">

        SUPABASE_DB: leads (nome, whatsapp, servico)

        <br/>

        Agência IA Diniz © 2026

      </footer>

    </main>

  )
      }
