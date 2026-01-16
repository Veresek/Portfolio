import Image from 'next/image'
import mapPin from '@assets/mapPin.svg'
import briefcase from '@assets/briefcase.svg'
import book from '@assets/book.svg'
import github from '@assets/socials/github.svg'
import linkedin from '@assets/socials/linkedin.svg'
import twitch from '@assets/socials/twitch.svg'
export default function Sidebar() {
   return (
      <aside className="sticky top-8 self-start w-full md:w-70 lg:w-[320px] bg-[#1e1e1f] rounded-2xl p-4 md:p-6">
         <div className="flex justify-center content-center">
            <figure className="relative block">
               <Image
                  src={'/profile.png'}
                  alt="my face"
                  width={120}
                  height={120}
                  className="rounded-2xl w-20 h-20 md:w-30 md:h-30"
               />
               <div className="rounded-full size-3 md:size-4 bg-green-500 absolute -right-1 -bottom-1"></div>
            </figure>
         </div>
         <div className="text-center mt-4">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Kacper Filipowski</h1>
            <p className="capitalize text-xs md:text-sm text-gray-400">frąciasz po butkampie</p>
         </div>
         <hr className="my-4 border-slate-500" />
         <ul className="space-y-2">
            <InfoLi svgUrl={book} title={'experience'} desc={'Student'} />
            <InfoLi
               svgUrl={briefcase}
               title={'availability'}
               desc={'Available for collaboration'}
            />
            <InfoLi svgUrl={mapPin} title={'location'} desc={'Minsk Mazowiecki, Poland'} />
         </ul>
         <ul className="mt-4 flex justify-center gap-4 md:gap-6">
            <SocialLi svgUrl={github} link="https://github.com/Veresek" />
            <SocialLi
               svgUrl={linkedin}
               link="https://www.linkedin.com/in/kacper-filipowski-b61968377/"
            />
            <SocialLi svgUrl={twitch} link="https://www.twitch.tv/veresek" />
         </ul>
      </aside>
   )
}

function InfoLi({ svgUrl, title, desc }: { svgUrl: string; title: string; desc: string }) {
   return (
      <li className="flex items-center">
         <div className="bg-[#333] rounded-xl md:rounded-2xl p-2 shrink-0">
            <Image
               src={svgUrl}
               width={30}
               height={30}
               alt={title}
               className="w-5 h-5 md:w-7.5 md:h-7.5"
            />
         </div>
         <div className="flex flex-col ml-3">
            <p className="uppercase text-xs md:text-sm text-gray-300">{title}</p>
            <p className="text-xs md:text-sm">{desc}</p>
         </div>
      </li>
   )
}
function SocialLi({ svgUrl, link }: { svgUrl: string; link: string }) {
   return (
      <li>
         <a href={link} className="block p-2 hover:bg-[#333] rounded-lg transition-colors">
            <Image
               src={svgUrl}
               alt="social icon"
               width={25}
               height={25}
               className="w-5 h-5 md:w-6.25 md:h-6.25"
            />
         </a>
      </li>
   )
}
