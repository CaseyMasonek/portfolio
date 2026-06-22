// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  vite: {
      // @ts-ignore
      plugins: [tailwindcss()],
      assetsInclude: ["**/*.glb",'**/*.gltf']
  },

  integrations: [react(), sanity( {
      projectId: 'anrv7lhl',
      useCdn: false,
      dataset: "production",
  })],
});