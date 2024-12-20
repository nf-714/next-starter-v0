import * as z from "zod";

// Define the Zod schema for the form fields
export const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  rememberMe: z.boolean().optional(),
});

export const registrationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});
