import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { GROUPS_TABLE } from "@/convex/constant";

const groups = defineTable({
  description: v.string(),
  icon_url: v.string(),
  name: v.string(),
});

const messages = defineTable({
  content: v.string(),
  group_id: v.id(GROUPS_TABLE),
  user: v.string(),
  file: v.optional(v.string()),
});

export default defineSchema({
  ...authTables,
  groups,
  messages,
});
