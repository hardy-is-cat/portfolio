import type { Metadata } from "next";
import "./globals.css";

import { JotaiProviders } from "@/components/JotaiProviders";
import InitTheme from "@/components/InitTheme";

export const metadata: Metadata = {
  title: "ZUAL | 프론트엔드 개발자 조정현",
  description: "프론트엔드 개발자 조정현의 포트폴리오 사이트입니다.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
