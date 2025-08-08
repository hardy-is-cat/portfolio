import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { JotaiProviders } from "../components/JotaiProviders";
import InitTheme from "../components/InitTheme";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ZUAL | 프론트엔드 개발자 조정현",
  description: "프론트엔드 개발자 조정현의 포트폴리오 사이트입니다.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const cookieStore = await cookies();
  // const theme = cookieStore.get("theme")?.value || "dark";

  return (
    <html lang="ko-KR">
      <JotaiProviders>
        <body>
          <InitTheme>{children}</InitTheme>
        </body>
      </JotaiProviders>
    </html>
  );
}
