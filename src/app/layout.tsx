import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UKUDL — Links",
  description: "Personal & professional links hub by UKUDL",
  icons: {
    icon: "/UKUDL.png",
    apple: "/UKUDL.png",
  },
  openGraph: {
    title: "UKUDL — Links",
    description: "Personal & professional links hub by UKUDL",
    images: ["/UKUDL.png"],
  },
  twitter: {
    card: "summary",
    title: "UKUDL — Links",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
