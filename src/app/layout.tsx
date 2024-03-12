import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/shared/Header/header";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
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
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
