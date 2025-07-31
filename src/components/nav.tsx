'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
export default function Nav() {
   const [openNav, setOpenNav] = useState<boolean>(false)
   return (
      <nav>
         <Image
            src={`/menu.svg`}
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
                     <Link href="#">About Me</Link>
                  </li>
                  <li>
                     <Link href="#">My Projects</Link>
                  </li>
                  <li>
                     <Link href="#">My Experience</Link>
                  </li>
                  <li>
                     <Link href="#">Contact</Link>
                  </li>
               </ul>
            </div>
         )}
      </nav>
   )
}
