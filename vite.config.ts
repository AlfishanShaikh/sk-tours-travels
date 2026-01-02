import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";
import jsDomRenderer from "@prerenderer/renderer-jsdom";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    mode === "production" && prerender({
      routes: ["/"],
      renderer: jsDomRenderer,
      rendererOptions: {
        renderAfterTime: 500,
      },
      postProcess(renderedRoute) {
        // Ensure clean HTML for SEO
        renderedRoute.html = renderedRoute.html
          .replace(/<script[^>]*data-lovable[^>]*><\/script>/g, '')
          .replace(/data-lov-id="[^"]*"/g, '');
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
