import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Context from "../../context/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Student Management System",
  description: "A student management system",
};

export default function RootLayout({ children }) {
  return (
    <Context>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </Context>
  );
}
