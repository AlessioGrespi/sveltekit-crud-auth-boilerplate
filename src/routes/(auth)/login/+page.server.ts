import type { Actions, PageServerLoad } from "./$types"
import { prisma } from "$lib/server/prisma"

import { error, fail, redirect } from "@sveltejs/kit"

export const load: PageServerLoad = async ({ locals, cookies }) => {
	
	const posts = await prisma.post.findMany()

    if (locals.user) {
        throw redirect(307,"/")
    }

	return {
		user: locals.user,
		email: cookies.get('user'),
		posts
	}
}

export const actions: Actions = {
	login: async ({ request, cookies }) => {
	
	//default: async ({ request, cookies }) => {
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

            console.log("Logging in")
            
			

		} catch (err) {
			console.error('An error occurred:', err);
			console.log("ERROR ERROR ERROR")
			return fail(500, { message: "An error occurred" });

		}

		throw redirect(303,"/")
	},
}
