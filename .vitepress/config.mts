import { defineConfig } from 'vitepress'

// Base path is injected by the GitHub Pages workflow (actions/configure-pages).
// Empty or unset means the site is served from the domain root (custom domain).
const rawBase = process.env.VITEPRESS_BASE ?? ''
const base = `/${rawBase.replace(/^\/+|\/+$/g, '')}/`.replace('//', '/')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Eintrittli",
  description: "Einfaches Anlass-Registrierungssystem mit konfigurierbaren Formularen, QR-Codes und CSV-Export. Keine Bezahlungen, kein Login für Teilnehmer.",
  lang: 'de-CH',
  base,
  appearance: false,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: `${base}favicon.ico` }],
    ['meta', { name: 'theme-color', content: '#257DEC' }],
    ['meta', { property: 'og:title', content: 'Eintrittli - Anlass-Registrierung. Einfach gemacht.' }],
    ['meta', { property: 'og:description', content: 'Konfigurierbare Formulare, QR-Codes und Live-Übersicht - ohne Bezahlsystem, ohne Login für Teilnehmer.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,

    nav: [
      { text: 'Funktionen', link: '/#funktionen' },
      { text: 'So funktioniert es', link: '/#so-funktioniert-es' },
      { text: 'Kontakt', link: '/#kontakt' },
      { text: 'Demo', link: 'https://demo.eintrittli.ch' }
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/weborb-ch/eintrittli' }
    ],

    footer: {
      message: 'Open Source unter MIT Lizenz',
      copyright: '© 2026 WebOrb'
    }
  }
})
