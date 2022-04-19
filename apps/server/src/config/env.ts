import { config } from 'dotenv';
import { z } from 'zod';

config();

const envSchema = z.object({
  NODE_ENV: z.enum(['production', 'development', 'test']).default('development'),
  PORT: z.preprocess((v) => Number(v || 8080), z.number()),
  REDIS: z.string().default('localhost:6399'),
});

export const ENV = envSchema.parse(process.env);
