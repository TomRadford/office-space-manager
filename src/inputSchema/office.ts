import { z } from "zod";

/**
 * Schema for office input validation
 */
export const officeInputSchema = z.object({
  name: z.string().min(3),
  address: z.string(),
  email: z.string().email(),
  phone: z.string().min(10),
  maximumCapacity: z.number(),
  colour: z.string(),
});
