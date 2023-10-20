import type { RequestEvent } from "@sveltejs/kit"

export const authenticateUser = (event: RequestEvent) => {
	// get the cookies from the request
	const { cookies } = event

	// get the user token from the cookie
	const userToken = cookies.get("usertype")

	console.log("Checking user in server")

	// if the user token is not valid, return null
	// this is where you would check the user token against your database
	// to see if it is valid and return the user object
	if (userToken === "USER") {
		const user = {
			role: "USER",
		}
		console.log(user)
		return user
	}

	return null
}
