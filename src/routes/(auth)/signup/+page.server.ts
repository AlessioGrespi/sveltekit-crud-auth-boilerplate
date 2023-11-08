import type { Actions, PageServerLoad } from "./$types"
import { prisma } from "$lib/server/prisma"
import bcrypt from 'bcrypt'
import { error, fail, redirect } from "@sveltejs/kit"



export const load: PageServerLoad = async ({ locals, cookies }) => {
	return {
		user: locals.user,
		email: cookies.get('user'),
	}
}

export const actions: Actions = {

	
	signup: async ({ request, cookies }) => {

		const form = Object.fromEntries(await request.formData()) 
		
		console.log(form)

		const hashedPassword = await bcrypt.hash(form.password, 10)

		try {

            await prisma.user.create({
                data: {
                    email: form.email,
                    username: form.username,
                    password: { 
                        create: {
                            password: hashedPassword ,
                        },
                    },
                },
            })

            
			
			
		} catch (err) {
			console.error('An error occurred:', err);
			console.log("Username/email already taken")
			return fail(500, { message: "An error occurred" });
		}

        //throw redirect(303,'/')

		// Return the appropriate response
		throw redirect (303,'/')
	}
}


