import type { Actions, PageServerLoad } from "./$types"
import { prisma } from "$lib/server/prisma"

import { error, fail, redirect } from "@sveltejs/kit"

export const load: PageServerLoad = async ({ locals, cookies }) => {
	
	//const posts = await prisma.post.findMany()
	/*
	return {
		user: locals.user,
		email: cookies.get('user'),
		//posts
	} */
}
