export const siteConfig = {
  name: "Agência IA Diniz",
  description: "Transformamos visitantes em clientes via WhatsApp.",
  url: "https://agencia-lp-system.vercel.app",
  mainNav: [
    { title: "Início", href: "/" },
    { title: "Benefícios", href: "#beneficios" },
  ],
  links: {
    // Ajustado com o número 19992278928 que apareceu no seu teste
    whatsapp: "https://wa.me/5519992278928?text=Olá!%20Vim%20pelo%20site%20e%20quero%20alavancar%20meu%20negócio.",
  },
  copy: {
    headline: "Pare de perder clientes e receba contatos no WhatsApp todos os dias",
    subheadline: "Landing pages de alta performance criadas para converter curiosos em vendas reais.",
    cta: "Quero vender mais agora",
  }
}

export type SiteConfig = typeof siteConfig
