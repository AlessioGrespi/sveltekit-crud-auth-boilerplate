import type{  RequestEvent } from "@sveltejs/kit"
import { prisma } from "$lib/server/prisma"
import { writable } from 'svelte/store';

export const oAuthDataEmail = writable("")
export const oAuthDataEmailVerified = writable("")
export const oAuthDataProvider = writable("")
export const oAuthDataAccessToken = writable("")
export const oAuthDataAccessTokenExpiry = writable("")
export const oAuthDataRefreshToken = writable("")

export const authenticateUser = async (event: RequestEvent) => {
		// get the cookies from the request
		const { cookies } = event

		// console.log(cookies)
		// console.log(event.locals.user)
		// get the user token from the cookie
		const userToken = cookies.get("session")

		//console.log(userToken)

		//console.log("Checking user in server")

		// if the user token is not valid, return null
		// this is where you would check the user token against your database
		// to see if it is valid and return the user object

		if (!userToken) {
			//console.log("User token not found in cookies");
			return null; // Return or handle the absence of a user token
		}

		const session = await getSession({ userToken });

		if (session) {
			// You can use the session object here
			//console.log("Session found:", session);
			const user = session
			return user; // Return the session object
		} else {
			//console.log("Session not found");
			return null; // Handle the case where the session is not found
		}
}
	
	
/* 	async function getSession({ userToken }) {

		const session = await prisma.session.findFirst({
			where: {
				id: userToken
			}
		})
		console.log("Session lookup")

		console.log(session)
		return session
	} */

	/* async () => {

		const session = await getSession({ userToken });
		
		if (session) {
			// You can use the session object here
			console.log(session);
		} else {
			console.log("Session not found");
		}
	};
 */


async function getSession({ userToken }) {
    const session = await prisma.session.findFirst({
        where: {
            id: userToken
        }
    });
    //console.log("Session lookup", session);
    return session;
}