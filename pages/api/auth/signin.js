import { db } from "../../../lib/db.server"

export const handler = async (req, res) => {
    if(req.method === "POST") {
        const { email, password } = req.body

        const user = await db.user.findFirst({
            where: {
                email: email,
                password: password
            }
        })

        res.status(200).json(user)
    }
}