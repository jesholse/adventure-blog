import { getCollection } from "astro:content";
const posts = await getCollection("posts");
const categories = [];
const fetchCategories = posts.map((post) => {
  post.data.category.map((c) => {
    if (categories.includes(c)) return;
    categories.push(c);
  });
});

export async function GET({ request }) {
  return new Response(JSON.stringify({ posts }));
}
