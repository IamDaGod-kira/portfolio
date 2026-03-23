import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        visualizer({
            filename: './dist/stats.html',
            open: true,
            title: 'Bundle Visualizer',
        }),
    ],
    base: '/portfolio/',
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/setup.js',
    },
})
