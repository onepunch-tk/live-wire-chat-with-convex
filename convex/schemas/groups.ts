import { defineTable } from "convex/server";
import { v } from "convex/values";

export default defineTable({
  description: v.string(),
  icon_url: v.string(),
  name: v.string(),
});
