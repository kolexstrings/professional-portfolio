import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClientProviderWrapper } from "@/components/query-client-provider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kolade Olukoya - Blockchain Developer",
  description:
    "Seasoned Blockchain Developer with 4+ years of experience in decentralized applications, smart contracts, and Web3 technologies. Specialized in EVM chains, ICP, and modern blockchain solutions.",
  openGraph: {
    title: "Kolade Olukoya - Blockchain Developer",
    description:
      "Experienced blockchain developer creating innovative Web3 solutions with expertise in EVM chains, ICP, and decentralized applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <QueryClientProviderWrapper>
          <ThemeProvider defaultTheme="light">
            <TooltipProvider>
              <Toaster />
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </QueryClientProviderWrapper>
      </body>
    </html>
  );
}
