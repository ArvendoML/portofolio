import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { personalInfo } from "@/data/personal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const THEME_INIT_SCRIPT = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    var theme = stored || (prefersLight ? 'light' : 'dark');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: `${personalInfo.name} | Software Engineer`,
    template: `%s | ${personalInfo.name}`,
  },
  description:
    "Software Engineer building scalable web and mobile applications with React, Angular, TypeScript, Flutter, Node.js, and PostgreSQL across enterprise, fintech, and product teams.",
  keywords: [
    "Arvendo Manuel Lextian",
    "Software Engineer",
    "Frontend Developer",
    "Fullstack Developer",
    "React",
    "Angular",
    "Next.js",
    "TypeScript",
    "Flutter",
    "Node.js",
    "Express.js",
    "PostgreSQL",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.github }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personalInfo.siteUrl,
    siteName: `${personalInfo.name} Portfolio`,
    title: `${personalInfo.name} | Software Engineer`,
    description:
      "Software Engineer building scalable web and mobile applications with React, Angular, TypeScript, Flutter, and Node.js.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Software Engineer`,
    description:
      "Software Engineer building scalable web and mobile applications with React, Angular, TypeScript, Flutter, and Node.js.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <MotionProvider>
          <Navbar />
          <main className="grow flex flex-col">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
