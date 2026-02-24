import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
  title: 'Knot — Solana Agent Wallet',
  description: 'The autonomous wallet for AI agents on Solana. TEE-secured keys, Jupiter trading, policy controls. No private keys exposed.',
  // icons: {
  //   icon: [
  //     {
  //       url: '/icon-light-32x32.png',
  //       media: '(prefers-color-scheme: light)',
  //     },
  //     {
  //       url: '/icon-dark-32x32.png',
  //       media: '(prefers-color-scheme: dark)',
  //     },
  //     {
  //       url: '/icon.svg',
  //       type: 'image/svg+xml',
  //     },
  //   ],
  //   apple: '/apple-icon.png',
  // },
}

export const viewport: Viewport = {
  themeColor: '#0a0a10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="body">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <div className="fixed right-6 top-6 z-50">
            <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
