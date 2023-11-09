import type { Actions, PageServerLoad } from "./$types"
import { prisma } from "$lib/server/prisma"
import { error, fail, redirect } from "@sveltejs/kit"
import { sessionUserID } from '$lib/server/auth';
import { get } from 'svelte/store'

export const load: PageServerLoad = async ({ params }) => {
	
	const userID = get(sessionUserID)

	console.log('user id', userID)

	const getPost = async () => {
		const post = await prisma.post.findUnique({
			where: {
				id: params.postid,
			},
		})
        
		if (post?.authorId != userID){
			throw redirect(307, './../')
		}

		if (!post) {
			throw error(404, "Post not found")
		}
		console.log('author id', post.authorId)
		
		return post
	}

	

	return {
		post: getPost(),
		userID,
		
	}
}

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