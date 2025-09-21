import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

import Footer from "../components/structure/footer"
import Header from "../components/structure/header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SPARTA - Dashboard",
  description: "SPARTA Dashboard Application",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${roboto.variable} ${GeistMono.variable}`}>
        <Header />
       
          <Suspense fallback={null}>{children}</Suspense>

       
        
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
