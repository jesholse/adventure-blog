import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subTitle: z.string(),
    excerpt: z.string(),
    publishDate: z.date(),
    category: z.array(z.string().toLowerCase()),
  }),
});

const about = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    email: z.string(),
    number: z.number(),
  }),
});

export const collections = {
  posts: postCollection,
  about,
};
