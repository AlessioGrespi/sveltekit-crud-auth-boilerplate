import { authenticateUser } from "$lib/server/auth"
import { redirect, error, type Handle } from "@sveltejs/kit"


export const handle: Handle = async ({ event, resolve }) => {
	// Stage 1

	async function waitForSession() {
		try {
			const session = await authenticateUser(event)

			const sessionData = session;

			console.log("Checking in hooks")

			//console.log("Resolving event")
			//console.log(event)


			if (event.url.pathname.startsWith("/posts")) {
				console.log("Checking path access")
				console.log(sessionData)

				if (sessionData) {
					if (sessionData.userType !== "USER") {
						throw error(401, "No Access")
					}

					if (sessionData.userType === "USER") {
						console.log("access granted")
					}
				}
				else {
					throw error(401, "No session")
				}
			}

		} catch (err) {
			throw error(401, "No session")
		}
	}

	

	try{
		waitForSession()
	}
	catch(err){
		console.log("pain")
		throw redirect(303, "/")
	}




	const response = await resolve(event) // Stage 2


	// Stage 3
	//console.log("Returning response")
	return response
}
