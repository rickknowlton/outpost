import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import './globals.css'

export const metadata: Metadata = {
  title: 'Lancaster County Brewers Guild - Site Maintenance',
  description: 'Lancaster County Brewers Guild - Celebrating the rich brewing tradition of Lancaster County since the 1700s',
  icons: {
    icon: '/lcbg-icon-logo.png',
    apple: '/lcbg-icon-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

