import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import LoadingIntro from "@/components/loading-intro"
import ChatBot from "@/components/chatbot"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Afri Tech Group PLC - African Technology & Business Solutions",
  description:
    "Leading African technology and business solutions company specializing in software development, finance, and import/export services.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body>
        <LoadingIntro />
        {children}
        <ChatBot />
      </body>
    </html>
  )
}
