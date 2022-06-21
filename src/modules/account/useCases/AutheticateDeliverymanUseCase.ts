import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import prisma from "../../../database/prismaClient"

interface AuthenticateDeliverymanProps {
    username: string,
    password: string
}

export class AuthenticateDeliverymanUseCase {
    async execute({ username, password }: AuthenticateDeliverymanProps) {

        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        })

        if (!deliveryman) {
            throw new Error("Username or password invalid")
        }

        const passwordMatch = await compare(password, deliveryman.password)

        if (!passwordMatch) {
            throw new Error("Username or password invalid")
        }

        const token = sign({ username }, "secret2", {
            subject: deliveryman.id,
            expiresIn: '1d'
        })

        return token
    }
}