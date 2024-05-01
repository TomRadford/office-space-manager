import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { staffMemberInputSchema } from "@/inputSchema/staffMember";

export const staffMemberRouter = createTRPCRouter({
  // ToDo use protectedProcedure if we ever implemented authentication

  create: publicProcedure
    .input(staffMemberInputSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.staffMember.create({
        data: input,
      });
    }),

  update: publicProcedure
    .input(staffMemberInputSchema)
    .mutation(({ input, ctx }) => {
      return ctx.db.staffMember.update({
        where: { id: input.id },
        data: input,
      });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input, ctx }) => {
      await ctx.db.staffMember.delete({ where: { id: input.id } });
    }),
});
