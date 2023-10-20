import { authenticateUser } from "$lib/server/auth"
import { redirect, type Handle } from "@sveltejs/kit"


export const handle: Handle = async ({ event, resolve }) => {
	// Stage 1
	event.locals.user = authenticateUser(event)

    console.log("Checking in hooks")

	if (event.url.pathname.startsWith("/posts")) {
        if (!event.locals.user) {
			throw redirect(303, "/")
		}
		if (event.locals.user.role !== "USER") {
			throw redirect(303, "/")
		}

	}

	console.log("Resolving event")
	//console.log(event)
	const response = await resolve(event) // Stage 2

	// Stage 3
	console.log("Returning response")
	return response
}
