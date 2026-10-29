import { cloudflare } from "@cloudflare/vite-plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite-plus";
import agents from "agents/vite";

export default defineConfig({
  plugins: [agents(), react(), cloudflare(), tailwindcss()],
  fmt: { trailingComma: "none", printWidth: 80 },
  lint: { options: { typeAware: true, typeCheck: true } }
});
