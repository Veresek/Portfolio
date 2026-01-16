import Image from 'next/image'
import Link from 'next/link'
import frontend from '@assets/frontend.svg'
import backend from '@assets/backend.svg'
import uiux from '@assets/uiux.svg'
import devops from '@assets/devops.svg'
import react from '@assets/skills/react.svg'
import python from '@assets/skills/python.svg'
import docker from '@assets/skills/docker.svg'
import git from '@assets/skills/git.svg'
import linux from '@assets/skills/linux.svg'
import tailwind from '@assets/skills/tailwindcss.svg'

function Card({
   img,
   title,
   description,
   alt,
}: {
   img: string
   title: string
   description: string
   alt: string
}) {
   return (
      <div className="flex gap-4 p-4 bg-[#2a2a2a] border border-slate-600/50 rounded-xl hover:border-slate-500 transition-colors items-center">
         <div className="shrink-0 w-12 h-12 bg-[#1e1e1f] rounded-lg flex items-center justify-center">
            <Image src={img} width={24} height={24} alt={alt} />
         </div>
         <div>
            <h3 className="text-white font-medium mb-1">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
         </div>
      </div>
   )
}
function Skill({ img, alt, href }: { img: string; alt: string; href: string }) {
   return (
      <Link
         className="p-5 bg-[#222] block rounded-2xl hover:bg-[#2a2a2a] hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50"
         href={href}
      >
         <Image
            src={img}
            alt={alt}
            width={80}
            height={80}
            className="transition-transform duration-300"
         />
      </Link>
   )
}

export default function Home() {
   return (
      <div className="space-y-8">
         <h1 className="text-3xl font-bold text-white inline-block">
            About Me
            <span className="block w-12 h-1 bg-slate-500 mt-2 rounded-full"></span>
         </h1>
         <p className="text-gray-300 leading-relaxed">
            Hello! I&apos;m Kacper Filipowski, a passionate developer specializing in creating
            modern web applications. I love working with the latest technologies to build responsive
            and user-friendly interfaces, I&apos;m also intrested in cognitive science and topics
            related to machine learning.
         </p>
         <section>
            <h2 className="text-2xl font-semibold text-white mb-4">What I&apos;m Doing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <Card
                  img={frontend}
                  title="Frontend Development"
                  description="Responsive and modern web applications"
                  alt="frontend icon"
               />
               <Card
                  img={backend}
                  title="Backend Development"
                  description="Building robust and scalable server-side applications"
                  alt="backend icon"
               />
               <Card
                  img={uiux}
                  title="UI/UX Design"
                  description="Designing user-friendly interfaces and experiences"
                  alt="UI/UX icon"
               />
               <Card
                  img={devops}
                  title="DevOps"
                  description="Managing infrastructure and deployment processes"
                  alt="DevOps"
               />
            </div>
         </section>
         <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Skills</h2>
            <div className="flex flex-wrap gap-4 justify-evenly">
               <Skill img={react} alt="react logo" href="https://react.dev/" />

               <Skill img={tailwind} alt="tailwind logo" href="https://tailwindcss.com/" />

               <Skill img={python} alt="python logo" href="https://www.python.org/" />

               <Skill img={docker} alt="docker logo" href="https://www.docker.com/" />

               <Skill img={git} alt="git logo" href="https://git-scm.com/" />

               <Skill img={linux} alt="linux logo" href="https://www.linux.org/" />
            </div>
         </section>
      </div>
   )
}
