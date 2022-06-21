import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import prisma from "../../../database/prismaClient"

interface AuthenticateClientProps {
    username: string,
    password: string
}

export class AuthenticateClientUseCase {
    async execute({ username, password }: AuthenticateClientProps) {

        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })

        if (!client) {
            throw new Error("Username or password invalid")
        }

        const passwordMatch = await compare(password, client.password)

        if (!passwordMatch) {
            throw new Error("Username or password invalid")
        }

        const token = sign({ username }, "secret", {
            subject: client.id,
            expiresIn: '1d'
        })

        return token
    }
}