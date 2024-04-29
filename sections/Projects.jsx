import SectionTitle from '@/components/SectionTitle.jsx'
import { projects } from '@/utils/data.js'
import { Projector } from 'lucide-react'
import Image from 'next/image.js'
import Link from 'next/link.js'

const Projects = () => {
  return (
    <article className='flex min-h-screen w-full flex-col py-4 md:py-6'>
      <div className='flex items-center justify-center'>
        <SectionTitle
          title='Projects'
          icon={<Projector className='size-6' />}
        />
      </div>
      <section className='mt-2   flex flex-1 flex-col items-center gap-4 md:mt-4'>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </section>
    </article>
  )
}
const Project = ({ project }) => {
  return (
    <div className='flex w-full max-w-7xl flex-col items-center py-12 lg:flex-row lg:gap-x-12 lg:even:flex-row-reverse xl:gap-x-24  '>
      <div className='glassEffect flex aspect-square h-80 w-fit  items-center justify-center sm:h-[28rem]  md:h-[32rem]  xl:h-[36rem]'>
        <div className='xl::w-[32rem] relative h-52 w-72 sm:h-72 sm:w-[24rem] md:h-[20rem] md:w-[28rem]'>
          <Image
            fill
            src={project.image}
            alt={project.title}
            className='h-fit w-fit'
          />
        </div>
      </div>
      <div className=' flex flex-col items-center justify-center gap-2 py-6 lg:items-start'>
        <span className='glassEffect w-fit rounded-full px-6 py-3'>
          {project.type}
        </span>
        <h2 className='heading-3 md:heading-2 text-center font-medium lg:text-left'>
          {project.title}
        </h2>
        <p className='body max-w-sm text-center lg:text-left text-greyColor'>
          {project.description}
        </p>
        <div className='mt-3 flex gap-x-3'>
          <Link
            href={project.github}
            className='rounded-lg bg-orangeColor px-6 py-3 '
          >
            Github Repo
          </Link>
          <Link
            href={project.live}
            className='rounded-lg border border-orangeColor px-6 py-3'
          >
            Live Preview
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
