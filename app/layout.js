import "./globals.css";

export const metadata = {
  title: "Qawha Ventures",
  description: "Qawha Ventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
