import { z } from "astro/zod";
import { defineCollection } from "astro:content";
import { notionLoader } from "notion-astro-loader";
import {
  notionPageSchema,
  propertySchema,
  transformedPropertySchema,
} from "notion-astro-loader/schemas";

// Schema para los posts del blog
const posts = defineCollection({
  loader: notionLoader({
    auth: import.meta.env.NOTION_TOKEN,
    database_id: import.meta.env.NOTION_POSTS_DATABASE_ID,
    filter: {
      and: [
        {
          property: "status",
          select: {
            equals: "Published",
          },
        },
      ],
    },
    sorts: [
      {
        property: "publishedAt",
        direction: "descending",
      },
    ],
  }),
  schema: notionPageSchema({
    properties: z.object({
      // Metadatos básicos
      title: transformedPropertySchema.rich_text,
      slug: transformedPropertySchema.rich_text,
      summary: transformedPropertySchema.rich_text, // Resumen generado por IA
      content: transformedPropertySchema.title,

      // Taxonomía y categorización
      category: propertySchema.multi_select,
      tags: propertySchema.multi_select,

      // Metadatos de publicación
      author: propertySchema.people,
      publishedAt: propertySchema.created_time,
      status: propertySchema.select, // Draft, Review, Published, Archived
      featured: propertySchema.checkbox,

      // SEO y medios
      featuredImage: propertySchema.files,
      seoTitle: transformedPropertySchema.rich_text.optional(), // Generado por IA
      seoDescription: transformedPropertySchema.rich_text.optional(), // Generado por IA
      // Engagement y métricas
      viewCount: propertySchema.number.optional(),
      commentsEnabled: propertySchema.checkbox.optional(),

      // Internacionalización
      locale: propertySchema.select.optional(),
      // Relaciones
      relatedPosts: propertySchema.relation.optional(),
      githubUrl: transformedPropertySchema.url.optional(),
      demoUrl: transformedPropertySchema.url.optional(),
    }),
  }),
});

// // Schema para los proyectos
// const projects = defineCollection({
//   loader: notionLoader({
//     auth: import.meta.env.NOTION_TOKEN,
//     database_id: import.meta.env.NOTION_PROJECTS_DATABASE_ID,
//     filter: {
//       property: "isArchived",
//       checkbox: { equals: false },
//     },
//   }),
//   schema: notionPageSchema({
//     properties: z.object({
//       title: transformedPropertySchema.title,
//       description: transformedPropertySchema.rich_text,
//       techs: propertySchema.multi_select,
//       link: transformedPropertySchema.url.optional(),
//       blogUrl: transformedPropertySchema.url.optional(),
//       githubUrl: transformedPropertySchema.url.optional(),
//       isComingSoon: propertySchema.checkbox.optional(),
//       isArchived: propertySchema.checkbox.optional(),
//       startDate: propertySchema.date.optional(),
//     }),
//   }),
// });

export const collections = { posts };
