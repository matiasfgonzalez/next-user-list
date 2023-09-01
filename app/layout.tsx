import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User App",
  description: "App de consulta de usuarios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto h-[calc(100vh-7rem)] flex justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
