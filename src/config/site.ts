export const siteConfig = {
  name: "Agência IA Diniz",
  description: "Transformamos visitantes em clientes via WhatsApp.",
  url: "https://agencia-lp-system.vercel.app",
  mainNav: [
    { title: "Início", href: "/" },
    { title: "Benefícios", href: "#beneficios" },
  ],
  links: {
    // Usando um número fictício para demonstração e evitar bloqueio na Workana
    whatsapp: "https://wa.me/5500000000000?text=Olá!%20Vim%20pelo%20site%20demonstrativo.",
  },
  copy: {
    headline: "Pare de perder clientes e receba contatos no WhatsApp todos os dias",
    subheadline: "Landing pages de alta performance criadas para converter curiosos em vendas reais.",
    cta: "Quero vender mais agora",
  }
}

export type SiteConfig = typeof siteConfig
