import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL ? "https://www.ashtonscalise.com" : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ashton Scalise · Software Engineer",
  description:
    "Software engineer building platform tools and AI agents for seismic data processing, and browser games in three.js.",
  openGraph: {
    title: "Ashton Scalise · Software Engineer",
    description:
      "Platform tools and AI agents for seismic data processing, plus browser games: Invictum and Tandem.",
    images: ["/images/invictum.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#07070c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
