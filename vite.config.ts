import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy(),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Onez",
        short_name: "Onez",
        description:
          "Esse site vai revolucionar o modo de compras e de ver ol nosso universo",
        theme_color: "#ffffff",
        background_color: "#000000", // Cor de fundo
        icons: [
          {
            src: "https://img.playbook.com/62fx_rlSzOX6gCEd0VBeXOLDZP743AHWlhmYiah1rRs/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzUzN2U0NzFj/LTBjMzMtNDdhNy05/MGM2LTZlNmQ4Mjcw/MDA5ZQ",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "https://img.playbook.com/bzF8FBTOKxRgrZseriGqKwftdBtVYh6BXLBqR5_saVg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I0ZmY3NDE1/LWRjNjEtNDYzYS04/Nzk1LTA0M2Y4Yjgy/YWIzMg",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "https://img.playbook.com/SsbIm8JPrLX4h5zkdfvdtZCKwQvlOjn5EvuR7yRNZHw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzA1OTNkOTAw/LTA3ODAtNDE1YS05/YjYzLWQ2MjExYTNi/YmIxOQ",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "https://img.playbook.com/uVFV1M63Eayw38lJRyK2rTQ4qARXPVC5IYJCHBHP7zU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzA0MGM0ZDY4/LWYzMzUtNDQxMy05/Mjg1LTRiY2Q4YjAx/ODcyMg",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "https://img.playbook.com/u5hqJDNwX-KLOz7IDKYp57yxOedAlIXtFWzAvSHqZpU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzc5ODFhMDVh/LTY5YWItNDA2Mi1h/NjMyLWVmMWMzMDZh/N2UxNg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "https://img.playbook.com/dp0TqM1cqA_-jR4FmCX2qmio1zzf4B277zUQorZK4VE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2UxY2QzNTEz/LThmYzMtNDlkNy1i/ZjA4LWRlMzllZjI5/YjJkYQ",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "https://img.playbook.com/-i0Eb1q-GytGOz9EQMnvwyW2R8Ok7oHRl0uwP0Pjhzw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2U2ZDVhMTQ3/LTk0YzItNGRlNi1h/OTIzLWE0NmNiMDRk/NGE3ZA",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "https://img.playbook.com/ehJ3SMKnwa5t2PLgqP7_trZ-FinKgMAY1YxGdC7UIFg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2U1OTQxOTE0/LWE4MDYtNDM5ZC1h/YjY4LWZmMjI3MGEy/N2Q0OA",
            sizes: "1024x1024",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "https://img.playbook.com/asJ3zrIW0SwFoqno--5vgLpYwcO2RNBRrNWbswx5R4w/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Q0ZDhlZDk4/LWJkNWItNDc3NS04/MjRjLWZhZTI1YTBj/M2Q3Nw",
            sizes: "540x720",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "https://img.playbook.com/Uj5sZLrS1E4IejcRqXK5nEftP2XHKxp2AtZgIaieFVg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2U3MzgzY2Rm/LTY0MzctNDI1Zi05/ZTZlLWFhYjJmYTA4/MzMwOQ",
            sizes: "540x720",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "https://img.playbook.com/sUtjz1eCWBYLgm1hwVy-KYhVtg7hMq5U_NgkOGqJSzE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2VmN2EyZGM3/LTQ5MjEtNDkwMC04/OGNmLTUzOWYyNTQy/MTRjNg",
            sizes: "540x720",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "https://img.playbook.com/-NtmZXlPVlFFrOD5lfR1yCpMAUNDUmGHlpugC2uQyEw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzRiNDNiMTQ4/LWQ3ODgtNGQ2OC05/ZjQ4LTVkZDcwMDNi/ZmUwYg",
            sizes: "1024x593",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "https://img.playbook.com/SlmcSd9gFSfcIIslec4SHYCSQPqOupzI4LrM0SK2kVY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzA0NzkzMGM5/LWMzODYtNDlhOC05/MDk5LTk4YTc0N2Vm/NWQ0ZQ",
            sizes: "1024x593",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "https://img.playbook.com/3qbBrFHSf9lFS27KJkBq4hLdsvgeBV3AmYcOigJURLI/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzNhOTdkOGI4/LWZjOGMtNGI1NS1h/NzY3LWY4OTQxYzZi/MDVlMw",
            sizes: "1024x593",
            type: "image/png",
            form_factor: "wide",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        secure: false,
        rewrite: path => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    outDir: "dist",
  },
});
