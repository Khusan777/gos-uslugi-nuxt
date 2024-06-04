export default defineNuxtConfig({
  app: {
    baseURL: process.env.BASE_URL,
    head: {
      title: 'Nuxt 3 starter',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ]
    }
  },
  modules: [
    '@pinia/nuxt'
  ],
  runtimeConfig: {
    public: {
      API_KEY: process.env.API_KEY
    }
  }
});
