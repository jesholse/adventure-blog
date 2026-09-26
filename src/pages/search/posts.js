
import { getCollection } from "astro:content"
import DefaultLayout from "../../layout/DefaultLayout.astro"
const posts = await getCollection("posts")
export const prerender = false;

/*export async function GET(){
	return new Response(JSON.stringify({data: posts}))
}
*/
export async function GET({request, params, redirect}){
	const hx = request.headers.get("hx-request")
	const url = new URL(request.url)
	const q = url.searchParams.get("q")
	const filtered = posts.filter(p => p.data.title.toUpperCase().includes(q.toUpperCase()))
 	console.log(filtered)
 	if(q.length < 1 ){
	 return new Response(
	  null
	 )
	}
 	if(hx){
		return new Response(filtered.map((p)=>{
		 return `<p class=" p-2 "><a class="underline" href='/posts/${p.slug}'>${p.data.title}</a></p>`
		}).join(""))
	}
	
return redirect(`/search/?q=t`);
}
