import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    baseURL: process.env.BASE_URL,
    head: {
      title: "State services",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  eslint: {},
  modules: ["@pinia/nuxt", "@nuxt/eslint", "@nuxt/eslint"],
  runtimeConfig: {
    public: {
      API_KEY: process.env.API_KEY,
    },
  },
});
