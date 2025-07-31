import Image from 'next/image'
export default function Sidebar() {
   return (
      <aside>
         <figure>
            <Image src={'/profile.png'} alt="my face" width={120} height={120} />
            <div className="rounded-full size-4 bg-green-500"></div>
         </figure>
         <div>
            <h1>Kacper Filipowski</h1>
            <p>Software Engineer</p>
         </div>
         <hr />
         <ul>
            <li>
               <div>
                  <Image src={`/mapPin.svg`} width={40} height={40} alt="Map icon" />
               </div>
               <div>
                  <p>location</p>
                  <p>Warsaw, Poland</p>
               </div>
            </li>
            <li>
               <div>
                  <Image src={`/mapPin.svg`} width={40} height={40} alt="Map icon" />
               </div>
               <div>
                  <p>location</p>
                  <p>Warsaw, Poland</p>
               </div>
            </li>
            <li>
               <div>
                  <Image src={`/mapPin.svg`} width={40} height={40} alt="Map icon" />
               </div>
               <div>
                  <p>location</p>
                  <p>Warsaw, Poland</p>
               </div>
            </li>
         </ul>
         <ul>
            <li>
               <a href="https://github.com/Veresek">
                  <Image src="/github.svg" alt="github icon" width={25} height={25} />
               </a>
            </li>
            <li>
               <a href="https://www.linkedin.com/in/kacper-filipowski-b61968377/">
                  <Image src="/linkedin.svg" alt="linkedin icon" width={25} height={25} />
               </a>
            </li>
            <li>
               <a href="https://www.twitch.tv/veresek">
                  <Image src="/twitch.svg" alt="twitch icon" width={25} height={25} />
               </a>
            </li>
         </ul>
      </aside>
   )
}
