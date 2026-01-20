import "@styles/font.css";
import "./globals.css";
import "@styles/mainbundle.scss";
import SmoothScroll from "@common/SmoothScroll";
import ClientLayoutWrapper from "@common/ClientLayoutWrapper";

export const metadata = {
  title: "Qawha Ventures",
  description: "Qawha Ventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
