import { Poppins } from "next/font/google";
import "./globals.css";
import "@styles/mainbundle.scss";
import SmoothScroll from "@common/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Qawha Ventures",
  description: "Qawha Ventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
