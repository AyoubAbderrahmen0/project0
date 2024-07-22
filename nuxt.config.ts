import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: true,
  typescript: {
    typeCheck: true,
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag === "center", // Treat 'center' as a custom HTML element
    },
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: "Etnafes",
      meta: [{ name: "description", content: "everything about nuxt-3" }],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/logo.webp" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Jost:wght@500;600&family=Roboto&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
          integrity:
            "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css",
        },
      ],
      script: [
        {
          src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCidD4GBkYXMcyDIRWWUhfkZHT9noeXXzE&libraries=places&callback=initMap"
        },
        {
          src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
        },
        { src: "lib/easing/easing.min.js" },
        { src: "lib/waypoints/waypoints.min.js" },
        { src: "lib/owlcarousel/owl.carousel.min.js" },
        { src: "lib/lightbox/js/lightbox.min.js" },
        { src: "js/main.js" },
      ],
    },
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/styles/bootstrap.scss",
    "@/assets/css/style.css",
  ],
  /*  modules: [
    // Réactivez les modules un par un
    // "~/modules/extendRoutes.js",
  ], */
});
