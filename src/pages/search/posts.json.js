
import { getCollection } from "astro:content"
const posts = await getCollection("posts")
export const prerender = false;

export async function GET(){
	return new Response(JSON.stringify({data: posts}))
}


/*export async function GET(){
	return new Response(posts.map((post)=>{
		return `<h2>hej</h2>`
	})
	)
}*/
