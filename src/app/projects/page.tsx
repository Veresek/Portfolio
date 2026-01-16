import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import todoapp from '@assets/todoapp.png'
import twintracks from '@assets/twintracks.png'

function ProjectCard({
   name,
   description,
   livedemo,
   repo,
   imgLink,
   tags,
}: {
   name: string
   description: string
   livedemo: string
   repo: string
   imgLink: StaticImageData
   tags: string[]
}) {
   return (
      <div className="group relative rounded-xl overflow-hidden aspect-video bg-[#2a2a2a] cursor-pointer">
         {/* Screenshot/Image */}
         <Image
            src={imgLink}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
         />

         {/* Overlay on hover */}
         <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
            <h3 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
               {name}
            </h3>
            <p className="text-gray-300 text-sm mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
               {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
               {tags.map((tag, i) => (
                  <span
                     key={i}
                     className="text-xs px-2 py-1 bg-slate-600/50 text-slate-300 rounded-md"
                  >
                     {tag}
                  </span>
               ))}
            </div>

            {/* Links */}
            {(livedemo !== '#' || repo !== '#') && (
               <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  {livedemo !== '#' && (
                     <Link
                        href={livedemo}
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                        target="_blank"
                     >
                        🔗 Demo
                     </Link>
                  )}
                  {repo !== '#' && (
                     <Link
                        href={repo}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition-colors"
                        target="_blank"
                     >
                        📂 GitHub
                     </Link>
                  )}
               </div>
            )}
         </div>
      </div>
   )
}

export default function Projects() {
   const projects = [
      {
         name: 'TwinTracks',
         description: 'Song recommendation app',
         livedemo: 'http://twintracks.xyz',
         repo: '#',
         imgLink: twintracks,
         tags: ['Next.js', 'TypeScript', 'Tailwind', 'Python', 'FastAPI'],
      },
      {
         name: 'ToDo App',
         description: 'A simple todo app',
         livedemo: 'https://todo-app-sigma-sand.vercel.app/',
         repo: 'https://github.com/Veresek/todo-app',
         imgLink: todoapp,
         tags: ['React.js', 'Tailwind', 'TypeScript'],
      },
   ]

   return (
      <div className="space-y-8">
         <h1 className="text-3xl font-bold text-white inline-block">
            Projects
            <span className="block w-12 h-1 bg-slate-500 mt-2 rounded-full"></span>
         </h1>
         <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {projects.map((project, index) => (
               <ProjectCard key={index} {...project} />
            ))}
         </div>
      </div>
   )
}
