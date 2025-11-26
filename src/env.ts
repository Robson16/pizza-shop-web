import * as zod from 'zod'

const envSchema = zod.object({
  VITE_API_URL: zod.url(),
})

export const env = envSchema.parse(import.meta.env)
