import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Link from 'next/link'
import { Github } from 'lucide-react'
import Image from 'next/image'
import neonLogo from '@/public/NeonEVM Logo Pink.png'

const inter = localFont({
  src: [
    {
      path: './Inter/static/Inter_24pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Inter/static/Inter_24pt-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Inter/static/Inter_24pt-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Inter/static/Inter_24pt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
})

const syne = localFont({
  src: [
    {
      path: './Syne/static/Syne-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Syne/static/Syne-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Syne/static/Syne-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Syne/static/Syne-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Syne/static/Syne-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Developer\'s Playbook',
  description: 'A comprehensive guide for blockchain developers covering Neon EVM, Ethereum, and Solana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable} font-sans`}>
        <div className="min-h-screen bg-black">
          {/* Header */}
          <header className="bg-black shadow-sm border-b border-white/10 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <Link href="https://neonevm.org" className="flex items-center">
                  {/* Neon EVM Logo */}
                  <Image
                    src={neonLogo}
                    alt="Neon EVM Logo"
                    width={160}
                    height={60}
                  />
                </Link>
                <a
                  href="https://github.com/Avvrik/Dev-Playbook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] hover:from-[#8E1CF1] hover:to-[#FF00AA] text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Contribute to Playbook
                </a>
              </div>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
} 