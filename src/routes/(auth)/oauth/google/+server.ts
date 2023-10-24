import { redirect } from "@sveltejs/kit";
import { OAuth2Client } from "google-auth-library"
import { GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET } from "$env/static/private"

export const GET = async({url}) => {

    console.log(url)

    const googleRedirectURL = 'https://localhost:5173/oauth/google'
    const code = await url.searchParams.get('code')

    console.log('code: ', code)

    try{
        const oAuth2Client = new OAuth2Client(
            GOOGLE_CLIENT_ID,
            GOOGLE_CLIENT_SECRET,
            googleRedirectURL
        )
        
        console.log('New Client')

        const r = await oAuth2Client.getToken(code)

        console.log(r)

        oAuth2Client.setCredentials(r.tokens)
        console.log('Auth Tokens Received')
        const user = oAuth2Client.credentials
        console.log('Credentials: ', user)

    }catch(err){
        console.log("error")
    }

    throw redirect(303,'/')
}