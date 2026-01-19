import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import "@styles/mainbundle.scss";
import SmoothScroll from "@common/SmoothScroll";
import ClientLayoutWrapper from "@common/ClientLayoutWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

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
      <body className={`${poppins.variable} ${inter.variable}`}>
        <SmoothScroll />
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
