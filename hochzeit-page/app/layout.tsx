import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lena & Fabi | Wedding Celebration",
  description: "First concept draft for Lena & Fabi's wedding website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="gfs-didot-regular antialiased">
        {children}
      </body>
    </html>
  );
}
