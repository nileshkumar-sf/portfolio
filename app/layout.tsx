import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nilesh Kumar | Portfolio",
  description: "Portfolio website of Nilesh Kumar - Software Engineer, Backend, Frontend, Cloud, Open Source.",
  icons: {
    icon: "/n.svg",
  },
};

import Footer from './components/Footer';
import TechStackBackground from './components/TechStackBackground';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-courier antialiased flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900"
      >
        <TechStackBackground />
        <main className="flex-1 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
