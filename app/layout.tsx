import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/dashboard/TopBar";
import { CollegeProvider } from "@/context/CollegeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "College Hub",
  description: "College Hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <CollegeProvider>{children}</CollegeProvider>
      </body>
    </html>
  );
}
