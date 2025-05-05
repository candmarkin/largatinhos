import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import "./embla.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LarGatinhos",
  description: "Dando uma casa aos que mais precisam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="pt-br ">
      
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-800 max-w-screen min-h-screen static`}
      >
        <header className="bg-orange-200 p-6 shadow-md top-0">
                    <div className="container mx-auto flex justify-center items-center">
                      <Link href="/" className="text-3xl font-extrabold text-orange-800">Largatinhos</Link>
                      
                    </div>
                </header>
          

        {children}

        <footer className="bg-orange-200 p-4 text-center text-sm text-gray-700 mt-10 bottom-0">
        © 2025 Largatinhos. Todos os direitos reservados.
        </footer>
      </body>


    

    </html>
    </>
  );
}
