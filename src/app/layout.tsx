import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Brendan Falk",
    template: "%s | Brendan Falk",
  },
  description: "Personal blog and thoughts by Brendan Falk",
  authors: [{ name: "Brendan Falk" }],
  creator: "Brendan Falk",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brendanfalk.com",
    title: "Brendan Falk",
    description: "Personal blog and thoughts by Brendan Falk",
    siteName: "Brendan Falk",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brendan Falk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brendan Falk",
    description: "Personal blog and thoughts by Brendan Falk",
    creator: "@brendanfalk",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-black text-black dark:text-white antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
