import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parking System",
  description: "Smart parking finder with a 3D lot view",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
