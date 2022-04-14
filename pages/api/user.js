import { db } from "../../lib/db.server";

export default async function handler(req, res) {
    const id = req.id

    const user = await db.user.findFirst({
        where: {
            id
        }
    })

    res.status(200).json(user)
}