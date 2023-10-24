import type { Actions, PageServerLoad } from "./$types"
import { prisma } from "$lib/server/prisma"
import { OAuth2Client } from "google-auth-library"
import { GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET } from "$env/static/private"
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

		try {
            await prisma.user.create({
                data: {
                    email: form.email,
                    username: form.username,
                    password: { 
                        create: {
                            password: form.password ,
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
	},

	GoogleOAuth2: async({request}) => {
		console.log('SignUp with Google')

		const googleRedirectURL = 'http://localhost:5173/oauth/google'

		console.log('New Auth Client')

		const GoogleOAuth2Client = new OAuth2Client(
			GOOGLE_CLIENT_ID,
			GOOGLE_CLIENT_SECRET,
			googleRedirectURL
		)

		const googleAuthoriseURL = GoogleOAuth2Client.generateAuthUrl({
			access_type: 'offline',
			scope:'https://www.googleapis.com/auth/userinfo.profile',
			prompt: 'consent'
		});

		console.log('Generate Auth URL')

		throw redirect(302,googleAuthoriseURL)
	}

}


