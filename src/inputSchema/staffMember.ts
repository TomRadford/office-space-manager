import { z } from "zod";

/**
 * Schema for staff member input validation
 */
export const staffMemberInputSchema = z.object({
  /** Not needed for new staff member */
  id: z.number().optional(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  avatarUri: z.string({ message: "Please select an avatar image" }),
  officeId: z.number().optional(),
});
