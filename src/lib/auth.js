import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import client from "@/lib/mongodb";

export const auth = betterAuth({
  database: mongodbAdapter(client.db(), {
    client,
  }),
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  secret: process.env.BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
        defaultValue: "seeker",
        input: true,
      },
      skills: {
        type: "string",
        required: false,
        input: true,
      },
    },
  },
});