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
         <body className={`antialiased`}>
            <div className="flex flex-col md:flex-row gap-8 p-4 md:p-8 justify-center w-full">
               <Sidebar />
               <div className="flex-1 max-w-4xl bg-[#1e1e1f] relative rounded-2xl shadow-2xl border border-slate-700">
                  <Nav />
                  <div className="p-6">{children}</div>
               </div>
            </div>
         </body>
      </html>
   )
}
