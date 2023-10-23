import type { Actions, LayoutServerLoad } from "./$types"
import { redirect } from "@sveltejs/kit"

export const load: LayoutServerLoad = async ({ locals, cookies }) => {
	
	const session = cookies.get('session')

	return {
		session
	}
}

