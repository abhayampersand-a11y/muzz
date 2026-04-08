import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Testimonial = () => {
  return (
    <section
      className='scroll-mt-24 bg-section dark:bg-darklight border-none'
      id='testimonials'
    >
      <div className='container mx-auto max-w-6xl px-4'>
        <div>
          <Image
            src={getImgPath('/images/testimonial/vector-smart.png')}
            alt='Dana Electrical testimonial'
            width={150}
            height={0}
            quality={100}
            className='w_f w-94! h-52! m-auto'
          />

          <div className='pt-16 pb-28'>
            <p className='font-medium md:text-xl text-base text-midnight_text dark:text-white text-center max-w-3xl mx-auto'>
              Dana Electrical provided excellent service for our industrial motor
              rewinding and panel wiring requirements. Their team was highly
              professional, completed the work on time, and ensured everything
              was running smoothly. We truly appreciate their expertise and
              commitment to quality.
            </p>
          </div>

          <div className='text-center'>
            <strong className='text-lg font-bold text-midnight_text dark:text-primary'>
              Rajesh Patel
            </strong>
            <p className='text-base text-gray dark:text-white/50'>
              Industrial Client, Surat
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
