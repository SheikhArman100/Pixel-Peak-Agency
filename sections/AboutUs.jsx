import SectionTitle from '@/components/SectionTitle.jsx'
import { Users } from 'lucide-react'
import React from 'react'

const AboutUs = () => {
  return (
    <article className="w-full min-h-screen py-4 flex flex-col md:py-6">
        <div className="flex items-center justify-center">
        <SectionTitle title="About us" icon={<Users className="size-6"/>}/>
      </div>
      <section className="flex-1 flex items-center justify-center flex-wrap">
        <p className='heading-3 sm:heading-2 md:heading-1 2xl:display-3 w-full font-light text-center '>
          Pixel peak is <span className='py-0 px-2 sm:px-4 font2 font-extralight heading-4 sm:heading-3 md:heading-2 2xl:heading-1 text-orangeColor rounded-full border border-greyColor whitespace-nowrap mt-8'>IT service agency</span> that enables small business to grow online, connect with their audience, extend their reach and enjoy greater  <span className='py-0 px-2 sm:px-4 font2 font-extralight heading-3 md:heading-1 text-orangeColor rounded-full border border-greyColor whitespace-nowrap mt-2'>commercial success.</span> 
        </p>
        
      </section>
    </article>
  )
}

export default AboutUs