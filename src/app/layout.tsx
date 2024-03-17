"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useSelectedLayoutSegments } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = useSelectedLayoutSegments();
  console.log(path);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
