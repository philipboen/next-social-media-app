import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const signUpSchema = z.object({
  email: requiredString.email("Invalid email address"),
  username: requiredString
    .regex(/^[a-zA-Z0-9_-]+$/, "Only letters, numbers, - and _ are allowed")
    .min(3, "Username must be at least 3 characters"),
  password: requiredString
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])/,
      "Password must contain a lowercase letter, an uppercase letter, a number and a special character",
    ),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type LoginValues = z.infer<typeof loginSchema>;
