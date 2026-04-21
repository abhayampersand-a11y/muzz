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

const SHOWCASE_DIR = '/images/portfolio-photos/Showcase of our expertise'

const homepagePhotos = [
  { image: `${SHOWCASE_DIR}/IMG_20240628_161835.jpg`, alt: 'Motor Rewinding', title: 'Motor Rewinding' },
  { image: `${SHOWCASE_DIR}/IMG_20251016_194918.jpg`, alt: 'Panel Installation', title: 'Panel Installation' },
  { image: `${SHOWCASE_DIR}/IMG_20251031_112140.jpg`, alt: 'Pump Repair', title: 'Pump Repair' },
  { image: `${SHOWCASE_DIR}/IMG_20251108_182818.jpg`, alt: 'Industrial Wiring', title: 'Industrial Wiring' },
  { image: `${SHOWCASE_DIR}/IMG_20251204_201529.jpg`, alt: 'High Frequency Converter', title: 'High Frequency Converter' },
  { image: `${SHOWCASE_DIR}/IMG_20251204_201537.jpg`, alt: 'System Solution', title: 'System Solution' },
  { image: `${SHOWCASE_DIR}/IMG_20251208_174945.jpg`, alt: 'Ceiling Fan Rewinding', title: 'Ceiling Fan Rewinding' },
  { image: `${SHOWCASE_DIR}/IMG_20251225_154947.jpg`, alt: 'AC Gear Motor', title: 'AC Gear Motor' },
  { image: `${SHOWCASE_DIR}/IMG_20251227_143141.jpg`, alt: 'Borewell Pump Installation', title: 'Borewell Pump Installation' },
  { image: `${SHOWCASE_DIR}/IMG_20251229_112414.jpg`, alt: 'Dewatering Pump', title: 'Dewatering Pump' },
  { image: `${SHOWCASE_DIR}/IMG_20260102_090316.jpg`, alt: 'Three Phase Motor', title: 'Three Phase Motor' },
  { image: `${SHOWCASE_DIR}/IMG_20260103_112807.jpg`, alt: 'Single Phase Pump', title: 'Single Phase Pump' },
  { image: `${SHOWCASE_DIR}/IMG_20260105_180326.jpg`, alt: 'Shrimp Farming Motor', title: 'Shrimp Farming Motor' },
  { image: `${SHOWCASE_DIR}/IMG_20260107_113030.jpg`, alt: 'Motor Rewinding', title: 'Motor Rewinding' },
  { image: `${SHOWCASE_DIR}/IMG_20260107_154708.jpg`, alt: 'Panel Installation', title: 'Panel Installation' },
  { image: `${SHOWCASE_DIR}/IMG_20260109_181508.jpg`, alt: 'Pump Repair', title: 'Pump Repair' },
  { image: `${SHOWCASE_DIR}/IMG_20260110_120330.jpg`, alt: 'Industrial Wiring', title: 'Industrial Wiring' },
  { image: `${SHOWCASE_DIR}/IMG_20260113_101403.jpg`, alt: 'Shutter Vibrator Motor', title: 'Shutter Vibrator Motor' },
  { image: `${SHOWCASE_DIR}/IMG_20260117_155152.jpg`, alt: 'System Solution', title: 'System Solution' },
  { image: `${SHOWCASE_DIR}/IMG_20260128_161717.jpg`, alt: 'High Frequency Converter', title: 'High Frequency Converter' },
  { image: `${SHOWCASE_DIR}/IMG_20260128_181722.jpg`, alt: 'AC Gear Motor', title: 'AC Gear Motor' },
  { image: `${SHOWCASE_DIR}/IMG_20260212_213813.jpg`, alt: 'Torrent Work', title: 'Torrent Work' },
  { image: `${SHOWCASE_DIR}/IMG_20260220_145151.jpg`, alt: 'Borewell Pump Installation', title: 'Borewell Pump Installation' },
  { image: `${SHOWCASE_DIR}/IMG_20260225_143059.jpg`, alt: 'Dewatering Pump', title: 'Dewatering Pump' },
  { image: `${SHOWCASE_DIR}/IMG_20260303_165219.jpg`, alt: 'Three Phase Motor', title: 'Three Phase Motor' },
  { image: `${SHOWCASE_DIR}/IMG_20260319_224506.jpg`, alt: 'Ceiling Fan Rewinding', title: 'Ceiling Fan Rewinding' },
  { image: `${SHOWCASE_DIR}/IMG_20260416_164529.jpg`, alt: 'Torrent Work', title: 'Torrent Work' },
]

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
          {homepagePhotos.map((item, index) => (
            <SwiperSlide key={index} className='h-auto'>
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default PortfolioCard
