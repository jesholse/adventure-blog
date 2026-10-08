

import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

const posts = await getCollection("posts");
const categories = [];
const fetchCategories = posts.map((post) => {
  post.data.category.map((c) => {
    if (categories.includes(c)) return;
    categories.push(c);
  });
});
console.log(JSON.stringify(categories))
export const GET: APIRoute = () => {
  return new Response(JSON.stringify({categories}),{
    headers: { 'Content-Type': 'application/json' },
});
}

