import './globals.css'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Estimação por intervalo',
  description:
    'Estimação por intervalo. Intervalos de confiança para médias e proporções.'
}

export default function RootLayout({
  children
}: {
  children: ReactNode | ReactNode[]
}) {
  return (
    <html lang="pt-BR">
      <body className={`bg-[#d3d3d3] dark:bg-[#121212] ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
