import { redirect } from "@sveltejs/kit"
import type { RequestHandler } from "../../$types"
import { prisma } from "$lib/server/prisma"

export const POST: RequestHandler = async ({ cookies }) => {
    
    const session = cookies.get('session')

    await prisma.session.delete({
        where: {
            id: session
        }
    })


    console.log('Clearing session ', session)
			
    cookies.delete('session')

    console.log('logged out')
    
    throw redirect(303, "/")
}
