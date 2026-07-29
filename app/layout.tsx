import "./globals.css";
import SmoothScroller from "./wrapper/SmothScroller";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  );
}
