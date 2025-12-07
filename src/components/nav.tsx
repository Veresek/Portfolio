'use client'
import Image from 'next/image'
import Link from 'next/link'
import menu from '@assets/menu.svg'
import { useState } from 'react'
export default function Nav() {
   const [openNav, setOpenNav] = useState<boolean>(false)
   return (
      <nav>
         <Image
            src={menu}
            width={40}
            height={40}
            alt="menu icon"
            className=""
            onClick={() => {
               setOpenNav(!openNav)
            }}
         />
         {openNav && (
            <div>
               <ul>
                  <li>
                     <Link href="/">About Me</Link>
                  </li>
                  <li>
                     <Link href="/projects">My Projects</Link>
                  </li>
                  <li>
                     <Link href="/experience">My Experience</Link>
                  </li>
                  <li>
                     <Link href="/contact">Contact</Link>
                  </li>
               </ul>
            </div>
         )}
      </nav>
   )
}
