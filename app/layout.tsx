import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "할인정보 블로그 - 최고의 특가 정보",
  description:
    "매일 업데이트되는 할인 정보와 쿠폰 코드로 현명한 소비를 시작하세요.",
  generator: "v0.dev",
  verification: {
    other: {
      "naver-site-verification": "a50a65c4844f93cf0b5849df821c96cea7cddc0c",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
