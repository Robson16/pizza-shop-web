import * as zod from 'zod'

const envSchema = zod.object({
  VITE_API_URL: zod.url(),
  VITE_ENABLE_API_DELAY: zod.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
