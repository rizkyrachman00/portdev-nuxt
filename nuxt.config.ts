// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-08-12',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'lenis/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  nitro: {
    static: true,
  },

  app: {
    head: {
      title: 'Rizky — Full-Stack & Mobile Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  fonts: {
    families: [
      { name: 'Geist', provider: 'google' },
      { name: 'Geist Mono', provider: 'google' },
    ],
  },

  tailwindcss: {
    // Tailwind v4 is configured via CSS; see app/assets/css/main.css
    config: false,
  },

  icon: {
    serverBundle: 'remote',
  },
})
