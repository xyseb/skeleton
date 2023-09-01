import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
        overlay: {
            initialIsOpen: false,
            position: "br", // "tl" | "tr" | "bl" | "br"
            badgeStyle: 'no',
            panelStyle: 'no'
        },
        terminal: true,
        enableBuild: true,
        typescript: true,
        eslint: {
            lintCommand: "eslint ./src/**/*",
        },
        stylelint: {
            lintCommand: "stylelint ../client/src/**/*.{scss,css}",
        },
    })
  ],
  logLevel: 'info', // info par defaut. 'info' | 'warn' | 'error' | 'silent'
  css: {
      devSourcemap: true
  },
  build: {
      sourcemap: true
  },
  server: {
      host: 'localhost',
      port: 5173,
      origin: 'http://localhost:5173',
      strictPort: true,
      open: true,
  },
  cacheDir: "../node_modules/.vite" // Force le cache de pre-bundling de vite dans le cas d'un monorepo pour evité d'avoir un dossier node_modules à la racine de l'app vite.
});