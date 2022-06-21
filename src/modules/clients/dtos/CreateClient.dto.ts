
import { z } from 'zod'

export const CreateClientDto = z.object({
    username: z.string(),
    password: z.string(),
})