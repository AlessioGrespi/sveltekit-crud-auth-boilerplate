import type { Actions, PageServerLoad } from "./$types"
import { prisma } from "$lib/server/prisma"
import bcrypt from 'bcrypt'
import { error, fail, redirect } from "@sveltejs/kit"

export const actions: Actions = {
    changePassword: async ({ request, cookies })=>{
        const passwordForm = Object.fromEntries(await request.formData());

        const sessionToken = cookies.get("session")

        try {
            const sessionData = await prisma.session.findUniqueOrThrow({
                where: {id: sessionToken}
            })

            const password = await prisma.password.findUniqueOrThrow({
                where: {userId: sessionData.userId}
            });

            const result = await bcrypt.compare(passwordForm.oldPassword, password.password)
            
            console.log('result ', result)
            
            if (!result) {
				throw error(500, "error")
			}

            const newHashedPassword = await bcrypt.hash(passwordForm.newPassword, 10)

            await prisma.password.update({
                where: {userId: sessionData.userId},
                data: {
                    password: newHashedPassword,
                }
            })


        }catch (err) {
            console.error('An error occurred:', err);
        }
    } 
}