import React, { FC } from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import { BreadcrumbLink } from '@/types/breadcrumb'

interface HeroSubProps {
  title: string
  description: string
  breadcrumbLinks: BreadcrumbLink[]
}

const HeroSub: FC<HeroSubProps> = ({ title, description, breadcrumbLinks }) => {
  return (
    <>
      <section className='text-center md:pt-28 pt-24 md:pb-8 pb-6 dark:bg-darkmode'>
        <h2 className='dark:text-white md:text-3xl leading-tight text-2xl font-bold text-midnight_text'>
          {title}
        </h2>
        <p className='md:text-base text-sm text-grey dark:text-white/50 font-normal max-w-45 w-full mx-auto my-3 sm:px-0 px-4'>
          {description}
        </p>
        <Breadcrumb links={breadcrumbLinks} />
      </section>
    </>
  )
}

export default HeroSub
