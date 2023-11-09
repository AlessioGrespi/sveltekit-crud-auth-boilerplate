import type { Actions, PageServerLoad } from "./$types"
import { prisma } from "$lib/server/prisma"

import { error, fail, redirect } from "@sveltejs/kit"

export const load: PageServerLoad = async () => {

	return {
		posts: await prisma.post.findMany(),
	}
}


export const actions: Actions = {

	createPost: async ({ request, cookies }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string
			content: string
		}


		const sessionId = cookies.get("session")

		const sessionData = await prisma.session.findUnique({
			where: { id: sessionId }
		}) 

		const authorId = sessionData.userId

		try {
			await prisma.post.create({
				data: {
					title,
					content,
					authorId,
				},
			})
		} catch (err) {
			console.error(err)
			return fail(500, { message: "Could not create the article." })
		}

        throw redirect(303, "./posts")
	},
}
