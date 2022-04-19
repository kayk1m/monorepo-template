import { config } from 'dotenv';
import { z } from 'zod';

config();

const envSchema = z.object({
  NODE_ENV: z.enum(['production', 'development', 'test']),
  PORT: z.number().default(8080),
  REDIS: z.string().url().default('localhost:6399'),
});

export const ENV = envSchema.parse(process.env);
