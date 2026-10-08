import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
const posts = await getCollection("posts");


export const GET: APIRoute = () => {
  return new Response(JSON.stringify({posts}),{
    headers: { 'Content-Type': 'application/json' },
});
}


