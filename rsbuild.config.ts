import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
    plugins: [pluginReact()],
    server: {
        port: 6173,
        open: true
    },
    html: {
        template: "./public/index.html"
    },
    output: {
        assetPrefix: "/TV3RTK/",
    }
    // This ensures generated JS, CSS, and 
    // imported assets load from /TV3RTK/ 
    // rather than the domain root. 
    // Rsbuild specifically recommends 
    // output.assetPrefix for GitHub Pages project sites.
});


