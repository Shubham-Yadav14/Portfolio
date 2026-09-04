import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Shubham Yadav | Software Developer & AI Engineer",
  description: "Portfolio of Shubham Yadav, a Software Developer specializing in full-stack development, AI-powered applications, real-time systems, and scalable backend architecture.",
  openGraph: {
    title: "Shubham Yadav | Software Developer & AI Engineer",
    description: "Portfolio of Shubham Yadav, a Software Developer specializing in full-stack development, AI-powered applications, real-time systems, and scalable backend architecture.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Yadav | Software Developer & AI Engineer",
    description: "Portfolio of Shubham Yadav, a Software Developer specializing in full-stack development, AI-powered applications, real-time systems, and scalable backend architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
