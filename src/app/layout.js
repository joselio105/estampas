import { Poppins, Cutive_Mono } from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const cutiveMono = Cutive_Mono({
  variable: "--font-cutive-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Aline Verissimo",
  description: "Portfolio de Aline Verissimo",
  icons: {
    icon: "logo-aline-verissimo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} ${cutiveMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
