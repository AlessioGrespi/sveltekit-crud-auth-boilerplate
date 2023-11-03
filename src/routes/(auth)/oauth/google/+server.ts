import { redirect } from "@sveltejs/kit";
import { OAuth2Client } from "google-auth-library"
import { GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET } from "$env/static/private"
import { page } from "$app/stores";
import {writable} from 'svelte/store'
import { oAuthDataAccessToken, oAuthDataAccessTokenExpiry, oAuthDataEmail, oAuthDataEmailVerified, oAuthDataProvider, oAuthDataRefreshToken } from "$lib/server/auth.js";

export const GET = async({url}) => {

    try{
       // console.log(url)
       
        const googleRedirectURL = 'https://sveltekit-crud-auth-boilerplate.vercel.app/oauth/google'
        const code = await url.searchParams.get('code')
    
        //console.log('code: ', code)

        const oAuth2Client = new OAuth2Client(
            GOOGLE_CLIENT_ID,
            GOOGLE_CLIENT_SECRET,
            googleRedirectURL
        )
        
        console.log('New Client')

       // console.log('code: ', code)

        const r = await oAuth2Client.getToken(code)

        //console.log('r ', r)
       // console.log('r.tokens ', r.tokens)
        console.log('Auth Tokens Received')
        oAuth2Client.setCredentials(r.tokens)
        
        const user = oAuth2Client.credentials
        console.log('Credentials: ', user)
        
        function decodeJWT(token) {
            const parts = token.split('.');
            if (parts.length !== 3) {
                throw new Error('Invalid JWT format');
            }
            
            const encodedPayload = parts[1];
            const decodedPayload = atob(encodedPayload); // Decode Base64
            const payloadData = JSON.parse(decodedPayload);
            
            return payloadData;
        }
          
        const jwtToken = user.id_token;
        const decodedData = decodeJWT(jwtToken);
        
        console.log("token decoded", decodedData)
        console.log('email', decodedData.email)

            
        oAuthDataEmail.set(decodedData.email);
        oAuthDataEmailVerified.set(decodedData.email_verified)
        oAuthDataProvider.set("Google")
        oAuthDataAccessToken.set(user.access_token)
        oAuthDataAccessTokenExpiry.set(user.expiry_date)
        oAuthDataRefreshToken.set(user.refresh_token)
        
        //console.log(oAuthData.email)


    }catch(err){
        console.log("error")
    }

    throw redirect(303, "../signup/onboarding")
}