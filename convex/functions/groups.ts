import { mutation, query } from "@/convex/_generated/server";
import { v } from "convex/values";
import { GROUPS_TABLE } from "@/convex/constant";

export const getGroup = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query(GROUPS_TABLE).collect();
  },
});

export const getGroups = query({
  args: { id: v.id(GROUPS_TABLE) },
  handler: async (ctx, { id }) => {
    return ctx.db.query(GROUPS_TABLE).filter((q) => q.eq(q.field("_id"), id));
  },
});

export const createGroup = mutation({
  args: { description: v.string(), name: v.string(), icon_url: v.string() },
  handler: async ({ db }, args) => {
    await db.insert(GROUPS_TABLE, args);
  },
});
