import dotenv from 'dotenv'

dotenv.config()

export const PORT  = process.env.PORT as string

export const JWT = process.env.JWT as string
