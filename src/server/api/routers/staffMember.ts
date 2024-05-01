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

  //   getOne: publicProcedure
  //     .input(
  //       z.object({
  //         id: z.number(),
  //         staff: z.boolean().optional().default(false),
  //       }),
  //     )
  //     .query(({ input, ctx }) => {
  //       return ctx.db.office.findUnique({
  //         where: { id: input.id },
  //         include: { staffMembers: input.staff },
  //       });
  //     }),

  //   getAll: publicProcedure.query(({ ctx }) => {
  //     // return count of each office's staff
  //     return ctx.db.office.findMany({
  //       include: { _count: { select: { staffMembers: true } } },
  //     });
  //   }),

  //   update: publicProcedure
  //     .input(staffMemberInputSchema)
  //     .mutation(({ input, ctx }) => {
  //       return ctx.db.office.update({
  //         where: { id: input.id },
  //         data: { ...input, maximumCapacity: parseInt(input.maximumCapacity) },
  //       });
  //     }),

  //   delete: publicProcedure
  //     .input(z.object({ id: z.number() }))
  //     .mutation(async ({ input, ctx }) => {
  //       await ctx.db.staffMember.deleteMany({ where: { officeId: input.id } });
  //       await ctx.db.office.delete({ where: { id: input.id } });
  //     }),
});
