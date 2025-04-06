import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import VitePluginVueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    laravel({
      input: [ 'resources/css/app.css', 'resources/js/app.js' ],
      refresh: true,
    }),
    vue(),
    VitePluginVueDevTools({
      appendTo: 'app.js',
    }),
    tailwindcss()
  ],
})
