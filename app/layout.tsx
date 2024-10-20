import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import * as React from "react";
import MainAppBar from "./components/MainAppBar";
import { AuthProvider } from "./auth/Provider";
import { ThemeProviderWrapper } from "./wrappers/ThemeProviderWrapper";
import { Paper } from "@mui/material";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ashton Scalise Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
          <ThemeProviderWrapper>
            <MainAppBar />
            <Paper
              elevation={12} // Adjust elevation for shadow
              sx={{
                marginTop: "60px", // Reduced margin for better spacing

                padding: "20px", // Padding inside the Paper component

                height: "calc(100vh - 60px)",
                overflowY: "auto", // Allow for scrolling if content overflows
              }}
            >
              {children}
            </Paper>
          </ThemeProviderWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
