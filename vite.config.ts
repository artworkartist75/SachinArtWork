// import { defineConfig } from 'vite'
// import react, { reactCompilerPreset } from '@vitejs/plugin-react'
// import babel from '@rolldown/plugin-babel'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     babel({ presets: [reactCompilerPreset()] })
//   ],
//   server: {
//     host: true,
//     allowedHosts: [
//       'celery-unfixed-afraid.ngrok-free.dev'
//     ]
//   },
// })


import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),

    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",

      manifest: {
        name: "Sachin Artwork",
        short_name: "Artwork",
        description: "Official Artwork Portfolio of Sachin",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",

        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
        {
          src: "/screenshots/desktop.png",
          sizes: "1280x720",
          type: "image/png",
          form_factor: "wide",
          label: "Sachin Artwork Home Page"
        },
        {
          src: "/screenshots/mobile.png",
          sizes: "390x844",
          type: "image/png",
          label: "Sachin Artwork Mobile View"
        }
      ]
      },
    }),
  ],

  server: {
    host: true,
    allowedHosts: [
      "celery-unfixed-afraid.ngrok-free.dev",
    ],
  },
});