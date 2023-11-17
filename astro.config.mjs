import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import rehypeMermaid from "rehype-mermaid";
import { modifiedTime } from "./src/plugins/modifiedTime.mjs";
import rehypeMdxCodeProps from "rehype-mdx-code-props";

// https://astro.build/config
export default defineConfig({
  site: "https://luals.github.io",
  integrations: [mdx()],
  markdown: {
    /** We use our own syntax highlight from highlight.js */
    syntaxHighlight: false,
    smartypants: false,
    rehypePlugins: [
      () => rehypeMermaid({ mermaidConfig: { darkMode: true, theme: "dark" } }),
      rehypeMdxCodeProps,
    ],
    remarkPlugins: [modifiedTime],
  },
  trailingSlash: "always",
});
