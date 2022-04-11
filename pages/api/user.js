import { PrismaClient } from "@prisma/client";
import getUsers from "../../lib/getUsers";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    let users = await prisma.user.findMany()
    res.status(200).send([{userName: 'viktor', id: 1}, {userName: 'zive', id: 2}])
}