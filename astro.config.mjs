// @ts-check
import {
  rehypeHeadingIds,
  rehypeShiki,
  remarkCollectImages,
} from "@astrojs/markdown-remark";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMermaid from "remark-mermaidjs";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://nozz.dev/",

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react({
      experimentalReactChildren: true,
    }),
  ],

  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
    ],
  },

  output: "hybrid",

  experimental: {
    contentLayer: true,
  },

  markdown: {
    rehypePlugins: [
      [
        rehypeShiki,
        {
          theme: "github-dark", // Cambiado a un tema más compatible
          highlighter: "shiki",
          wrap: true,
        },
      ],
      rehypeHeadingIds,
      rehypeSlug,
    ],
    remarkPlugins: [
      remarkCollectImages,
      remarkGfm,
      [
        remarkMermaid,
        {
          theme: "dark",
          wrap: true,
          sequence: {
            actorFontFamily: "Space Grotesk",
            noteFontFamily: "Crimson Text",
            messageFontFamily: "Crimson Text",
          },
        },
      ],
    ],
    shikiConfig: {
      wrap: true,
    },
  },
  adapter: vercel(),
});
