import { redirect } from "@sveltejs/kit"
import type { RequestHandler } from "../../$types"

export const POST: RequestHandler = async ({ cookies }) => {
    console.log('logging out', cookies.get('user'))
			
    cookies.delete('user')
    cookies.delete('usertype')
    console.log('logged out')
    
    throw redirect(303, "/")
}
