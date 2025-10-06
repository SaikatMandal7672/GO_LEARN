import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { SkipLink } from "@/components/skip-link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoLearn - Master GoLang & Backend Development",
  description:
    "Learn Go programming from zero to production. Interactive lessons, real projects, and industry-ready skills.",
  keywords: [
    "golang",
    "go programming",
    "backend development",
    "learn go",
    "go tutorial",
    "web development",
  ],
  authors: [{ name: "GoLearn" }],
  openGraph: {
    title: "GoLearn - Master GoLang & Backend Development",
    description:
      "Learn Go programming from zero to production. Interactive lessons, real projects, and industry-ready skills.",
    type: "website",
    locale: "en_US",
    siteName: "GoLearn",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoLearn - Master GoLang & Backend Development",
    description:
      "Learn Go programming from zero to production. Interactive lessons, real projects, and industry-ready skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SkipLink />
            <div id="main-content">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
