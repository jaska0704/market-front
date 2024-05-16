import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/pages";
import { ThemeProvider } from "./components/provider";
import { ReduserProvider } from "@/provider/provider";
import { Suspense } from "react";
import Loading from "./loading";
import { NextAuthProvider } from "@/provider/next-auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ReduserProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex flex-col min-h-screen justify-between">
                <div>
                  <Header />
                  <Suspense fallback={<Loading />}>
                    <div className="mt-[120px] sm:mt-[230px] md:mt-[190px] lg:mt-[250px]">
                      {children}
                    </div>
                  </Suspense>
                </div>
                <Footer />
              </div>
            </ThemeProvider>
          </ReduserProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
