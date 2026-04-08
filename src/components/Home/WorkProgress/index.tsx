'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Progress as ProgressData } from '@/app/api/data'
import { getImgPath } from '@/utils/image'

// Define the interface for ProgressItem
interface ProgressItem {
  title: string
  Progress: number
}

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {
  const [progressValues, setProgressValues] = useState<ProgressItem[]>([])

  useEffect(() => {
    setProgressValues(ProgressData)
  }, [])

  return (
    <section
      className={`scroll-mt-25 ${
        isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
      }`}
      id='about'
    >
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 items-center gap-7'>
          
          {/* Image Section */}
          <div className='md:col-span-6'>
            <Image
              src={"https://media.istockphoto.com/id/501392396/photo/copper-wire-in-a-motor-electric-magnetic-device-for-rotor.jpg?s=612x612&w=0&k=20&c=gNMvqWnebJknyxGgiZNhRlV-VKjRg_0FfTXRGpd6O6o="}
              alt='Dana Electrical work progress'
              width={375}
              height={0}
              quality={100}
              style={{ width: '100%', height: 'auto' }}
              className='md:block hidden'
            />
          </div>

          {/* Content Section */}
          <div
            className='md:col-span-6'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'
          >
            <div className='flex gap-2 items-center'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                Our Expertise
              </span>
            </div>

            <h2 className='pt-9 pb-8 text-midnight_text font-bold dark:text-white text-4xl'>
              Delivering Reliable Electrical Solutions with Proven Experience
            </h2>

            <p className='text-gray dark:text-white/70 text-base font-semibold'>
              Dana Electrical is a trusted electrical engineering firm with over
              30 years of experience in providing professional motor rewinding,
              electrical panel wiring, and complete residential and industrial
              electrical services. Our work is driven by safety, precision, and
              long-term reliability.
            </p>

            {/* Progress Bars */}
            <div className='block mx-auto pt-12'>
              {progressValues.map((item, index) => (
                <div
                  key={index}
                  className='progress_bar_item flex flex-wrap mb-8'
                >
                  <div className='flex-1 w-auto text-sm font-normal text-grey mb-2 dark:text-white/50'>
                    {item.title}
                  </div>

                  <div className='item_value shrink text-sm font-normal text-grey mb-2 dark:text-white/50'>
                    {item.Progress}%
                  </div>

                  <div className='relative h-1 w-full bg-primary/30 rounded-md'>
                    <div
                      className='progress absolute left-0 top-0 bottom-0 h-full bg-primary rounded-md duration-100 ease-in-out'
                      style={{ width: `${item.Progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Progresswork
