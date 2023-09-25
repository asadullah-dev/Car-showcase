import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Fotter from '@/components/Fotter'


export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discovers the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Fotter/>
        </body>
    </html>
  )
}
