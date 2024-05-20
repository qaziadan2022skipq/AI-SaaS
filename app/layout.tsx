import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { ModalProvider } from "@/components/modal-provider";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "AI SaaS App",
  description: "Made By Qazi Adan",
};

export const viewport: Viewport = {
  width: 'device-width',
  userScalable: false,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ModalProvider />
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
