import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Varied weights for better typography
});

export const metadata = {
  title: "Portfolio | Frontend Developer",
  description: "A modern, high-performance portfolio website showcasing my work as a Frontend Web Developer.",
};

import LayoutWrapper from "@/components/layout/LayoutWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
