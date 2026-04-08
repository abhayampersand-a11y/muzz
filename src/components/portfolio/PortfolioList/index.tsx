'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioinfo } from '@/app/api/data'

const PortfolioList = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id='portfolio' className='md:pb-24 pb-16 pt-8 dark:bg-darkmode px-4 lg:px-8'>
      <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-[1600px] mx-auto'>
        {portfolioinfo.map((item, index) => (
          <Link key={index} href={`/portfolio/${item.slug}`} passHref>
            <div
              className='break-inside-avoid relative overflow-hidden rounded-xl cursor-pointer mb-4'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={800}
                height={index % 3 === 0 ? 600 : index % 3 === 1 ? 450 : 520}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                className={`transition-transform duration-500 ${hoveredIndex === index ? 'scale-105' : 'scale-100'}`}
              />

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h4 className='text-white text-base font-semibold leading-tight'>
                    {item.title}
                  </h4>
                  <p className='text-white/70 text-xs mt-1'>{item.info}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PortfolioList
