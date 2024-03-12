import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/shared/Header";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import Footer from "@/components/shared/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fitbod",
  description: "Workouts that Adapt to Your Growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
