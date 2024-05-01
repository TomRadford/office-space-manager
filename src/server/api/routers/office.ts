import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { officeInputSchema } from "@/inputSchema/office";

export const officeRouter = createTRPCRouter({
  // ToDo use protectedProcedure if we ever implemented authentication

  create: publicProcedure
    .input(officeInputSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.office.create({
        data: { ...input, maximumCapacity: parseInt(input.maximumCapacity) },
      });
    }),

  getOne: publicProcedure
    .input(
      z.object({
        id: z.number(),
        staff: z.boolean().optional().default(false),
      }),
    )
    .query(({ input, ctx }) => {
      return ctx.db.office.findUnique({
        where: { id: input.id },
        include: { staffMembers: input.staff },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    // return count of each office's staff
    return ctx.db.office.findMany({
      include: { _count: { select: { staffMembers: true } } },
    });
  }),

  update: publicProcedure
    .input(officeInputSchema)
    .mutation(({ input, ctx }) => {
      return ctx.db.office.update({
        where: { id: input.id },
        data: { ...input, maximumCapacity: parseInt(input.maximumCapacity) },
      });
    }),
});
