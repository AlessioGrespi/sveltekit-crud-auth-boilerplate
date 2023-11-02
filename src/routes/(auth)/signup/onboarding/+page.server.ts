import { get } from 'svelte/store'
import { oAuthDataAccessToken, oAuthDataAccessTokenExpiry, oAuthDataEmail, oAuthDataEmailVerified, oAuthDataProvider, oAuthDataRefreshToken } from '$lib/server/auth'
import type { Actions, PageServerLoad } from '../$types'

export const load: PageServerLoad = async ({ }) => {
    console.log("onboarding")

    const email = get(oAuthDataEmail);
    const emailVerified = get(oAuthDataEmailVerified)
    const provider = get(oAuthDataProvider);
    const accessToken = get(oAuthDataAccessToken);
    const accessTokenExpiry = get(oAuthDataAccessTokenExpiry);
    const refreshToken = get(oAuthDataRefreshToken);

    const oAuth = { email, emailVerified, provider, accessToken, accessTokenExpiry, refreshToken }
    console.log(accessTokenExpiry)
    //2023-11-03T00:15:58.405Z
    //2023-11-03T00:13:53.300Z
    const date = new Date(accessTokenExpiry);

    console.log(date)

    console.log("email from store", email)
    return {
        oAuth
    }
}

export const actions: Actions = {
    signup: async ({ request, cookies }) => {
        const email = get(oAuthDataEmail);
        const emailVerified = get(oAuthDataEmailVerified)
        const provider = get(oAuthDataProvider);
        const accessToken = get(oAuthDataAccessToken);
        let accessTokenExpiry = get(oAuthDataAccessTokenExpiry);
        const refreshToken = get(oAuthDataRefreshToken);
    
        const oAuth = { email, emailVerified, provider, accessToken, accessTokenExpiry, refreshToken }


        const form = Object.fromEntries(await request.formData())

        console.log("email received ", oAuth.email)
        console.log(form)

        let oAuthFlag;


        if (oAuth.email) {

            /* if (oAuth.emailVerified = true){
                email = oAuth.email;
                console.log(email)
            }
             */
            oAuthFlag = true;
        }
        else {
            oAuthFlag = false;
        }


        try {
            
           
            await prisma.user.create({
                data: {
                    email: email,
                    username: form.username,
                    password: {
                        create: {
                            password: form.password,
                        },
                    },
                },
            })

            console.log("user created")

            if (oAuthFlag = true) {
                const user = await prisma.user.findUnique({
                    where: { email: email }
                })
                
                console.log("user found")

                console.log("creating oauth row")

                await prisma.oAuth.create({
                    data: {
                        userId: user?.id,
                        data: oAuth
                    }
                })
            }


        } catch (err) {
            console.error('An error occurred:', err);
            console.log("Username/email already taken")
            return fail(500, { message: "An error occurred" });
        }

        //throw redirect(303,'/')

        // Return the appropriate response
        throw redirect(303, '/')
    },
}
