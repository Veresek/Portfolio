import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Sidebar from '@/components/sidebar'
import './globals.css'

export const metadata: Metadata = {
   title: 'Portfolio',
   description: 'essa',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={`antialiased`}>
            <Nav />
            <Sidebar />
            {children}
         </body>
      </html>
   )
}
