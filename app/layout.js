import { Inter } from "next/font/google";
import "./globals.css";
import "@styles/mainbundle.scss";
import SmoothScroll from "@common/SmoothScroll";
import ClientLayoutWrapper from "@common/ClientLayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Qawha Ventures",
  description: "Qawha Ventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <SmoothScroll />
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
