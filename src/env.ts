import * as zod from 'zod'

const envSchema = zod.object({
  MODE: zod.enum(['production', 'development', 'test']),
  VITE_API_URL: zod.string(),
  VITE_ENABLE_API_DELAY: zod.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
