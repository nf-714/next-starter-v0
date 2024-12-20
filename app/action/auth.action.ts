"use server";

import { signIn } from "@/auth/auth";

export async function signInWithEmail(email: string) {
  console.log(email);
  const response = await signIn("nodemailer", { email });
  console.log(email);

  console.log(response);
}

//write the code for signInWithGoogle function
export async function signInWithAuthProvider(provider: "google" | "github") {
  const response = await signIn(provider);

  console.log(response);
}
