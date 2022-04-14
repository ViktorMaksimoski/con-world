import { db } from "../../../lib/db.server";

export default async function handler(req, res) {
    if(req.method === "POST") {
        const { userName, email, password, dateOfBirth, place, gender } = req.body
        const user = await db.user.create({
            data: {
                userName: userName,
                email: email,
                password: password,
                dateOfBirth: dateOfBirth,
                gender: 'female',
                place: place,
            }
        })

        res.status(200).json(user)
    }
}