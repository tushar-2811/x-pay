import {z} from 'zod'

export const updateUserSchema = z.object({
    name : z.string().optional(),
    password : z.string().optional()
})