"use server";

import { createUser, getUserByEmail } from "../lib/db/user";

export async function registerUser(email: string, passwordHash: string) {
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    throw new Error("User already exists");
  }
  return createUser(email, passwordHash);
}