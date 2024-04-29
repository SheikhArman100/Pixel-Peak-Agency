import SectionTitle from '@/components/SectionTitle.jsx'
import { Contact } from 'lucide-react'
import React from 'react'

const ContactUs = () => {
  return (
    <article className='flex min-h-screen w-full flex-col py-4 md:py-6'>
      <div className='flex items-center justify-center'>
        <SectionTitle
          title='Contact us'
          icon={<Contact className='size-6' />}
        />
      </div>
      <section className='relative flex-1 flex flex-col items-center justify-center py-20'>
        <div className='flex w-full max-w-7xl flex-col lg:flex-row justify-center lg:gap-x-10 xl:gap-x-20 2xl:gap-x-32 glassEffect2 p-2 sm:p-6 lg:py-10 '>
          <div className='w-full lg:flex-1 max-w-xl'>
            <h2 className='heading-2 sm:heading-1 2xl:display-3 font-medium'>
              Interested in working with us?
            </h2>
            <p className='body mt-2 text-greyColor'>
              To discuss a new project, enquire about a service or to simply
              just reach out, please use our contact details below or fill out
              th form.we will contact you through email to schedule a call.
            </p>
            <div className='mt-3 flex w-full flex-wrap gap-2 lg:mt-[7rem]'>
              <ContactDetail title='contact.pixelpeak.solutions@gmail.com' />
              <ContactDetail title='+8801761264426' />
              <ContactDetail title='https://www.instagram.com/pixelpeak_it/' />
            </div>
          </div>
          <form className=' mt-4 flex w-full lg:w-fit flex-col items-center  '>
            <div className='flex w-full max-w-lg flex-col items-center gap-3'>
              <input
                type='text'
                placeholder='Full name'
                className='w-full border-b border-greyColor bg-transparent p-3'
              />
              <input
                type='email'
                placeholder='Email'
                className='w-full border-b border-greyColor bg-transparent p-3'
              />
              <input
                type='text'
                placeholder='Subject'
                className='w-full border-b border-greyColor bg-transparent p-3'
              />
              <textarea
                placeholder='Details'
                rows="4" cols="50"
                className='w-full border-b border-greyColor bg-transparent p-3'
              ></textarea>

              <div className=' mt-3 flex flex-col gap-2'>
                <span className='label'>*By clicking button, you accept the policy</span>
                <button className='body w-full rounded-lg bg-orangeColor px-4 py-3'>
                  Send mail
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </article>
  )
}
const ContactDetail = ({ title }) => {
  return <div className='glassEffect2 w-fit px-4 py-2'>{title}</div>
}

export default ContactUs
