import { convexAuth } from "@convex-dev/auth/server";
import GitHub from "@auth/core/providers/github";

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [GitHub],
  callbacks: {
    async redirect({ redirectTo }) {
      return redirectTo;
    },
  },
});
