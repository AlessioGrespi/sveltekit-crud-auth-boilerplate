import type { Actions, LayoutServerLoad } from "./$types"
import { redirect } from "@sveltejs/kit"

export const load: LayoutServerLoad = async ({ locals, cookies }) => {
	return {
		user: locals.user,
		email: cookies.get('user'),
	}
}

