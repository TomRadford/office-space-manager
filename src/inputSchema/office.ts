import { z } from "zod";

/**
 * Schema for office input validation
 */
export const officeInputSchema = z.object({
  /** Not needed for new office */
  id: z.number().optional(),
  name: z.string().min(3),
  address: z
    .string()
    .min(10, { message: "Address must be at least 10 characters long" }),
  email: z.string().email(),
  phone: z.string().min(10, { message: "Phone number must be 10 digits long" }),
  maximumCapacity: z
    .string() // since the number input is a string
    .refine((s) => parseInt(s) > 0 && parseInt(s) <= 500, {
      message: "Capacity must be greater than 0 and less or equal to 500",
      // so we dont need bigint for the column type/to keep office capacity reasonable
    }),
  colour: z.string(),
});
