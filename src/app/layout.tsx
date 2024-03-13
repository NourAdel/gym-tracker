import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../_components/shared/Header";
import Footer from "../_components/shared/Footer";
import "./globals.css";
import StyledComponentsRegistry from "../_lib/StyledComponentsRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fitbod",
  description: "Workouts that Adapt to Your Growth",
  icons: {
    icon: { url: '/favicon.ico', type: 'image/ico' },
    shortcut: { url: '/favicon.ico', type: 'image/ico' },
  },
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
