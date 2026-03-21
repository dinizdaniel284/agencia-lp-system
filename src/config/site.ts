export const siteConfig = {
  name: "Agência IA Diniz",
  description: "Transformamos visitantes em clientes via WhatsApp.",
  url: "https://agencia-lp-system.vercel.app",
  mainNav: [
    { title: "Início", href: "/" },
    { title: "Benefícios", href: "#beneficios" },
  ],
  links: {
    // Mantemos vazio para o sistema saber que é apenas demonstração
    whatsapp: "#",
  },
  copy: {
    headline: "Pare de perder clientes e receba contatos no WhatsApp todos os dias",
    subheadline: "Landing pages de alta performance criadas para converter curiosos em vendas reais.",
    cta: "Quero vender mais agora",
  }
}

export type SiteConfig = typeof siteConfig
