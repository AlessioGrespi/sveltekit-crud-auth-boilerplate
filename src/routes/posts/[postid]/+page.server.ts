import type { Actions, PageServerLoad } from "./$types"
import { prisma } from "$lib/server/prisma"
import { error, fail } from "@sveltejs/kit"
import { sessionUserID } from '$lib/server/auth';
import { get } from 'svelte/store'

export const load: PageServerLoad = async ({ params }) => {
	
	const getPost = async () => {
		const post = await prisma.post.findUnique({
			where: {
				id: params.postid,
			},
		})
		if (!post) {
			throw error(404, "Post not found")
		}
		console.log('author id', post.authorId)
		
		return post
	}

	const userID = get(sessionUserID)

	console.log('user id', userID)
	

	return {
		post: getPost(),
		userID,
		posts: await prisma.post.findMany(),
		
	}
}
/* 
export const actions: Actions = {
	updatePost: async ({ request, params }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string
			content: string
		}

		try {
			await prisma.post.update({
				where: {
					id: params.postid,
				},
				data: {
					title,
					content,
				},
			})
		} catch (err) {
			console.error(err)
			return fail(500, { message: "Could not update post" })
		}

		return {
			status: 200,
		}
	},
}
 */