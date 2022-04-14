import { db } from './db.server'

export async function getUsers() {
    const users = await (await fetch(process.env.URL + '/api/users')).json

    return users
}

export async function getUser() {
    const user = await (await fetch(process.env.URL + '/api/user')).json

    return user
}