'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
   const pathname = usePathname()

   const links = [
      { href: '/', label: 'About Me' },
      { href: '/projects', label: 'Projects' },
      { href: '/experience', label: 'Experience' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
   ]

   return (
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1a1a] border-t border-slate-600 lg:border-none lg:bg-transparent lg:absolute lg:top-4 lg:right-4 lg:left-auto lg:bottom-auto">
         <div className="p-3 lg:p-0">
            <ul className="flex flex-row justify-around lg:justify-end lg:gap-1">
               {links.map((link) => (
                  <li key={link.href}>
                     <Link
                        href={link.href}
                        className={`text-sm lg:text-base px-3 py-2 rounded-lg transition-all duration-200
                           ${
                              pathname === link.href
                                 ? 'text-white bg-slate-600/50 font-medium'
                                 : 'text-gray-400 hover:text-white hover:bg-slate-700/30'
                           }`}
                     >
                        {link.label}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   )
}
