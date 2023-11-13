import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RenderPages } from "@/components/RenderPages";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Conecta Saúde",
  description:
    "Um sistema responsável por conectar pacientes e médicos, entre municípios de forma simples e rápida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RenderPages>{children}</RenderPages>
      </body>
    </html>
  );
}
