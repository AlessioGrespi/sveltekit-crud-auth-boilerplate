import type { Actions, PageServerLoad } from "./$types"
import { prisma } from "$lib/server/prisma"

import { error, fail, redirect } from "@sveltejs/kit"

export const load: PageServerLoad = async ({ locals, cookies }) => {
	
	//const posts = await prisma.post.findMany()




	return {
		user: locals.user,
		email: cookies.get('user'),
		//posts
	}
}
/* 
export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const email = 'a@a.com'; // Replace with the email from the form submission
		const password = 'pass'; // Replace with the provided password
		
		const emailform = Object.fromEntries(await request.formData()) 
		
		//console.log(emailform)

		try {
			const user = await prisma.user.findUniqueOrThrow({
				where: { email: emailform.email } // Find the user by email
			});

			const passwordDB = await prisma.password.findUniqueOrThrow({
				where: { userId: user.id } // Find the user by email
			});
			
			console.log(user)
			console.log(passwordDB);
			console.log(emailform.password)

			if (passwordDB.password !== emailform.password){
				throw error(500, "error")
			}

			cookies.set("user", user.email, {
				path: "/",
				httpOnly: true,
				sameSite: "strict",
				secure: process.env.NODE_ENV === "production",
				maxAge: 60 * 60 * 24 * 7, // 1 week
			})

			cookies.set("usertype", user.usertype, {
				path: "/",
				httpOnly: true,
				sameSite: "strict",
				secure: process.env.NODE_ENV === "production",
				maxAge: 60 * 60 * 24 * 7, // 1 week
			})

			cookies.set("userid", user.id, {
				path: "/",
				httpOnly: true,
				sameSite: "strict",
				secure: process.env.NODE_ENV === "production",
				maxAge: 60 * 60 * 24 * 7, // 1 week
			})
			
		} catch (err) {
			console.error('An error occurred:', err);
			console.log("ERROR ERROR ERROR")
			return fail(500, { message: "An error occurred" });
		}

		// Return the appropriate response
		return {
			status: 202,
		};

	},

	createPost: async ({ request, cookies }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string
			content: string
		}

		const authorId = cookies.get("userid")

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

		return {
			status: 201,
		}
	},

	deletePost: async ({ url }) => {
		const id = url.searchParams.get("id")

		if (!id) {
			return fail(400, { message: "Invalid request" })
		}

		try {
			await prisma.post.delete({
				where: {
					id: id,
				},
			})
		} catch (err) {
			console.error(err)
			return fail(500, {
				message: "Something went wrong deleting your post",
			})
		}

		return {
			status: 200,
		}
	}, 
}
*/