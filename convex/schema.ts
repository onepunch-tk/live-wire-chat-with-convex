import { defineSchema } from "convex/server";
import groups from "@/convex/schemas/groups";
import messages from "@/convex/schemas/messages";

export default defineSchema({
  groups,
  messages,
});
