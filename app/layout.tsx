import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Ishara | Web Developer Portfolio",
  description: "Personal portfolio showcasing web development projects and skills. Built with Next.js, TypeScript, and Tailwind CSS.",
  keywords: ["web developer", "portfolio", "Next.js", "React", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Ishara" }],
  creator: "Ishara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ishara-portfolio.com",
    title: "Ishara | Web Developer Portfolio",
    description: "Passionate web developer creating beautiful and functional digital experiences",
    siteName: "Ishara Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishara | Web Developer Portfolio",
    description: "Passionate web developer creating beautiful and functional digital experiences",
    creator: "@ishara",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased bg-gray-50 dark:bg-gray-900 transition-colors duration-700">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}