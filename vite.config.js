import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'CNAME', // Path to your CNAME file
          dest: ''      // Copy to the root of the dist directory
        }
      ]
    })
  ]
});
