import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { officeInputSchema } from "@/inputSchema/office";

export const officeRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(officeInputSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.office.create({
        data: { ...input, maximumCapacity: parseInt(input.maximumCapacity) },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    // return count of each office's staff
    return ctx.db.office.findMany({
      include: { _count: { select: { staffMembers: true } } },
    });
  }),

  // getLatest: publicProcedure.query(({ ctx }) => {
  //   return ctx.db.post.findFirst({
  //     orderBy: { createdAt: "desc" },
  //   });
  // }),
});
