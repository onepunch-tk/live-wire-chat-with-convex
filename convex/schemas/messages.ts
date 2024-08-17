import { defineTable } from "convex/server";
import { v } from "convex/values";
import { GROUPS_TABLE } from "@/convex/constant";

export default defineTable({
  content: v.string(),
  group_id: v.id(GROUPS_TABLE),
  user: v.string(),
  file: v.optional(v.string()),
});
