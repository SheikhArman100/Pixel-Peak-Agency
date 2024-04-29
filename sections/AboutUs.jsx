import SectionTitle from '@/components/SectionTitle.jsx'
import { Users } from 'lucide-react'
import React from 'react'

const AboutUs = () => {
  return (
    <article className='flex min-h-screen w-full flex-col py-4 md:py-6'>
      <div className='flex items-center justify-center'>
        <SectionTitle title='About us' icon={<Users className='size-6' />} />
      </div>
      <section className='flex flex-1 flex-wrap items-center justify-center'>
        <p className='heading-3 sm:heading-2 md:heading-1 2xl:display-3 w-full text-center font-light '>
          Pixel peak is{' '}
          <span className='font2 heading-4 sm:heading-3 md:heading-2 2xl:heading-1 mt-8 whitespace-nowrap rounded-full border border-greyColor px-2 py-0 font-extralight text-orangeColor sm:px-4'>
            IT service agency
          </span>{' '}
          that enables small business to grow online, connect with their
          audience, extend their reach and enjoy greater{' '}
          <span className='font2 heading-3 md:heading-1 mt-2 whitespace-nowrap rounded-full border border-greyColor px-2 py-0 font-extralight text-orangeColor sm:px-4'>
            commercial success.
          </span>
        </p>
      </section>
    </article>
  )
}

export default AboutUs
