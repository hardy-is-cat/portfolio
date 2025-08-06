"use server";

import { cookies } from "next/headers";

export async function cookieAction() {
  const cookieStore = await cookies();

  const hasTheme = cookieStore.has("theme");

  if (!hasTheme) {
    cookieStore.set({
      name: "theme",
      value: "dark",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
  }
}
