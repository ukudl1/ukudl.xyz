import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UKUDL Space",
  description: "Personal & professional links hub by UKUDL",
  openGraph: {
    title: "UKUDL Space",
    description: "Personal & professional links hub by UKUDL",
    images: ["/UKUDL.png"],
  },
  twitter: {
    card: "summary",
    title: "UKUDL Space",
    images: ["/UKUDL.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
