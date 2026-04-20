'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { portfolioinfo } from '@/app/api/data'

const PortfolioCard = () => {
  return (
    <div id='portfolio' className='dark:bg-darkmode'>
      <div className='lg:px-9 m-auto px-4 max-w-[1600px]'>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides={false}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          grabCursor={true}
          breakpoints={{
            360: { slidesPerView: 1.15, spaceBetween: 14 },
            480: { slidesPerView: 1.4, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 18 },
            768: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
            1536: { slidesPerView: 5, spaceBetween: 28 },
          }}
          className='portfolio-swiper !pb-14'
        >
          {portfolioinfo.map((item, index) => (
            <SwiperSlide key={index} className='h-auto'>
              <Link href={`/portfolio/${item.slug}`} passHref>
                <div className='group'>
                  <div className='relative overflow-hidden rounded-xl aspect-[4/3] w-full bg-section dark:bg-darklight shadow-sm'>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes='(max-width: 480px) 85vw, (max-width: 640px) 70vw, (max-width: 1024px) 45vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw'
                      style={{ objectFit: 'cover' }}
                      className='group-hover:scale-110 transition-transform duration-500 ease-out'
                    />
                  </div>
                  <h4 className='pb-0.5 pt-4 group-hover:text-primary group-hover:cursor-pointer text-base font-semibold text-midnight_text dark:text-white transition-colors'>
                    {item.title}
                  </h4>
                  <p className='text-secondary font-normal text-sm group-hover:text-primary group-hover:cursor-pointer dark:text-white/50 transition-colors'>
                    {item.info}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default PortfolioCard
