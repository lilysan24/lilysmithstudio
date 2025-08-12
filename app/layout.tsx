// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})


export const metadata: Metadata = {
  title: 'Lily Smith Studio',
  description: 'Artist | Designer | Storyteller',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-inter`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}