import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UKUDL Space",
  description: "Personal & professional links hub by UKUDL",
  icons: {
    icon: [
      { url: "/UKUDL.png", type: "image/png" },
    ],
    shortcut: "/UKUDL.png",
    apple: [
      { url: "/UKUDL.png", type: "image/png" },
    ],
    other: [
      { rel: "apple-touch-icon-precomposed", url: "/UKUDL.png" },
    ],
  },
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
      <head>
        <link rel="icon" type="image/png" href="/UKUDL.png" />
        <link rel="apple-touch-icon" href="/UKUDL.png" />
        <link rel="shortcut icon" href="/UKUDL.png" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
