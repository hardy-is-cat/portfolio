"use client";

import { useEffect, useState } from "react";

export default function InitTheme({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("themeMode") || "dark";
    // atomWithStorage가 문자열을 stringify해서 저장하므로 큰 따옴표를 떼줘야함
    const parseTheme = theme.replaceAll('"', "");
    if (parseTheme === "dark") document.body.classList.add("dark");
    setIsLoading(false);
  }, []);

  if (isLoading) return null;

  return <>{children}</>;
}
