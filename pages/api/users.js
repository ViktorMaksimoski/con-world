import { db } from "../../lib/db.server";

export default async function handler(req, res) {
    const users = await db.user.findMany()
    res.status(200).json(users)
}