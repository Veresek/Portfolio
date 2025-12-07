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
      <div>
         <Image src={img} width={40} height={40} alt={alt} />
         <h3>{title}</h3>
         <p>{description}</p>
      </div>
   )
}
function Skill({ img, alt, href }: { img: string; alt: string; href: string }) {
   return (
      <Link className="p-5 bg-[#222] block rounded-2xl" href={href}>
         <Image src={img} alt={alt} width={100} height={100} />
      </Link>
   )
}

export default function Home() {
   return (
      <div>
         <h1>About Me</h1>
         <div></div>
         <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur explicabo
            consectetur, eius repudiandae eum ut quod magni at perferendis dolores similique!
            Quaerat, similique saepe quod totam autem doloremque assumenda culpa.
         </p>
         <div>
            <h2>What I&apos;m Doing</h2>
            <Card
               img={frontend}
               title="Frontend Development"
               description="essa"
               alt="frontend icon"
            />
            <Card img={backend} title="Backend Development" description="essa" alt="backend icon" />
            <Card img={uiux} title="UI/UX Design" description="essa" alt="UI/UX icon" />
            <Card img={devops} title="DevOps" description="essa" alt="DevOps" />
         </div>
         <div>
            <h2>Skills</h2>
            <div className="flex gap-4">
               <Skill img={react} alt="react logo" href="https://react.dev/" />
               <Skill img={tailwind} alt="tailwind logo" href="https://tailwindcss.com/" />
               <Skill img={python} alt="python logo" href="https://www.python.org/" />
               <Skill img={docker} alt="docker logo" href="https://www.docker.com/" />
               <Skill img={git} alt="git logo" href="https://git-scm.com/" />
               <Skill img={linux} alt="linux logo" href="https://www.linux.org/" />
            </div>
         </div>
      </div>
   )
}
