import type { Metadata } from 'next'
import Sidebar from '@/components/sidebar'
import Nav from '@/components/nav'
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
         <body className={`antialiased pb-16 md:pb-0`}>
            <div className="flex gap-8 p-8 justify-center w-full">
               <Sidebar />
               <div className="flex-1 max-w-4xl bg-[#1e1e1f] border border-slate-500 relative rounded-2xl overflow-hidden">
                  <Nav />
                  <div className="p-6">{children}</div>
               </div>
            </div>
         </body>
      </html>
   )
}
