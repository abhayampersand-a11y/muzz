'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type PortfolioImage = {
  src: string
  alt: string
}

type PortfolioCategory = {
  key: string
  label: string
  images: PortfolioImage[]
}

const BOWLING_DIR =
  '/images/portfolio-photos/Bowling Machine Motor-20260420T163844Z-3-001/Bowling Machine Motor'
const CEILING_DIR =
  '/images/portfolio-photos/Celling fan rewinding-20260420T163803Z-3-001/Celling fan rewinding'
const HFC_DIR =
  '/images/portfolio-photos/High Frequency Converter-20260420T163848Z-3-001/High Frequency Converter'
const SHRIMP_DIR =
  '/images/portfolio-photos/Shrimp Farming Motors and Pumps-20260420T163856Z-3-001/Shrimp Farming Motors and Pumps'
const SYSTEM_DIR =
  '/images/portfolio-photos/System Solution and Panel Making-20260420T163907Z-3-001/System Solution and Panel Making'
const THREE_PHASE_DIR =
  '/images/portfolio-photos/Three Phase Water Pumps -20260420T163900Z-3-001/Three Phase Water Pumps'

const buildImages = (
  dir: string,
  files: string[],
  label: string,
): PortfolioImage[] =>
  files.map((file, i) => ({
    src: `${dir}/${file}`,
    alt: `${label} - photo ${i + 1}`,
  }))

const portfolioCategories: PortfolioCategory[] = [
  {
    key: 'bowling-machine-motor',
    label: 'Bowling Machine Motor',
    images: buildImages(
      BOWLING_DIR,
      [
        'IMG-20220926-WA0026.jpg',
        'IMG-20220926-WA0027.jpg',
        'IMG_20251021_024859.jpg',
      ],
      'Bowling Machine Motor',
    ),
  },
  {
    key: 'high-frequency-converter',
    label: 'High Frequency Converter',
    images: buildImages(
      HFC_DIR,
      [
        'IMG-20220817-WA0023.jpg',
        'IMG-20230721-WA0010.jpg',
        'IMG-20230721-WA0011.jpg',
        'IMG_20240616_103548.jpg',
        'IMG_20240620_105423.jpg',
        'IMG_20240621_101145.jpg',
        'IMG_20240707_155753.jpg',
        'IMG_20240712_105332.jpg',
        'IMG_20240807_154350.jpg',
        'IMG_20250329_154212.jpg',
        'IMG_20250329_154237.jpg',
        'IMG_20250514_153626.jpg',
        'IMG_20250516_123714.jpg',
      ],
      'High Frequency Converter',
    ),
  },
  {
    key: 'shrimp-farming-motors-and-pumps',
    label: 'Shrimp Farming Motors and Pumps',
    images: buildImages(
      SHRIMP_DIR,
      [
        '2022-05-19 (2).jpg',
        '2022-06-13 (1).jpg',
        'IMG_20220713_110543.jpg',
        'IMG_20240526_102616.jpg',
        'IMG_20240706_152226.jpg',
        'IMG_20240728_171844.jpg',
        'IMG_20250430_193205.jpg',
        'IMG_20250526_163709.jpg',
        'IMG_20251021_024656.jpg',
        'IMG_20251206_131810.jpg',
      ],
      'Shrimp Farming Motors and Pumps',
    ),
  },
  {
    key: 'three-phase-water-pumps',
    label: 'Three Phase Water Pumps',
    images: buildImages(
      THREE_PHASE_DIR,
      [
        'IMG_20240512_231109.jpg',
        'IMG_20241015_162456.jpg',
        'IMG_20241121_174940.jpg',
        'IMG_20250426_164714.jpg',
      ],
      'Three Phase Water Pumps',
    ),
  },
  {
    key: 'system-solution-and-panel-making',
    label: 'System Solution and Panel Making',
    images: buildImages(
      SYSTEM_DIR,
      [
        '2022-05-19 (2).webp',
        '2022-05-19 (3).webp',
        'IMG-20220514-WA0032.jpg',
        'IMG-20220514-WA0033.jpg',
        'IMG-20220729-WA0011.jpg',
        'IMG-20220729-WA0012.jpg',
        'IMG-20220902-WA0009.jpg',
        'IMG-20221215-WA0015.jpg',
        'IMG-20221215-WA0016.jpg',
        'IMG-20221215-WA0017.jpg',
        'IMG_20251201_124856.jpg',
        'IMG_20251201_133702.jpg',
      ],
      'System Solution and Panel Making',
    ),
  },
  {
    key: 'ceiling-fan-rewinding',
    label: 'Ceiling Fan Rewinding',
    images: buildImages(
      CEILING_DIR,
      [
        '2023-06-01 (3).jpg',
        'IMG_20240326_130710.jpg',
        'IMG_20250221_111907.jpg',
        'IMG_20250224_155821.jpg',
        'IMG_20250226_112104.jpg',
        'IMG_20250430_184502.jpg',
        'IMG_20250501_103404.jpg',
        'IMG_20250501_103408.jpg',
        'IMG_20250502_161543.jpg',
        'IMG_20251101_214759.jpg',
      ],
      'Ceiling Fan Rewinding',
    ),
  },
]

const PortfolioList = () => {
  const [activeTab, setActiveTab] = useState<string>(portfolioCategories[0].key)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const activeCategory =
    portfolioCategories.find((c) => c.key === activeTab) ?? portfolioCategories[0]

  useEffect(() => {
    if (!dropdownOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownOpen])

  return (
    <section
      id='portfolio'
      className='md:pb-24 pb-16 pt-8 dark:bg-darkmode px-4 lg:px-8'
    >
      <div className='max-w-[1600px] mx-auto'>
        {/* Mobile: dropdown */}
        <div className='md:hidden mb-8'>
          <div className='relative w-full' ref={dropdownRef}>
            <button
              type='button'
              aria-haspopup='listbox'
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen((o) => !o)}
              className='w-full flex items-center justify-between bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 rounded-full px-5 py-3 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary'
            >
              <span className='truncate text-left'>{activeCategory.label}</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className={`w-5 h-5 ml-2 shrink-0 text-gray-500 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
              >
                <path
                  fillRule='evenodd'
                  d='M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 010-1.06z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            {dropdownOpen && (
              <ul
                role='listbox'
                className='absolute left-0 right-0 top-full mt-2 z-50 max-h-72 overflow-y-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg py-2'
              >
                {portfolioCategories.map((cat) => {
                  const isActive = cat.key === activeTab
                  return (
                    <li key={cat.key} role='option' aria-selected={isActive}>
                      <button
                        type='button'
                        onClick={() => {
                          setActiveTab(cat.key)
                          setDropdownOpen(false)
                        }}
                        className={`w-full text-left px-5 py-2.5 text-sm break-words whitespace-normal ${
                          isActive
                            ? 'bg-primary text-white'
                            : 'text-gray-800 dark:text-gray-100 hover:bg-primary/10 hover:text-primary'
                        }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>

        {/* Desktop: Tabs */}
        <div
          className='hidden md:flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 md:mb-12'
          role='tablist'
          aria-label='Portfolio categories'
        >
          {portfolioCategories.map((cat) => {
            const isActive = cat.key === activeTab
            return (
              <button
                key={cat.key}
                role='tab'
                aria-selected={isActive}
                aria-controls={`panel-${cat.key}`}
                id={`tab-${cat.key}`}
                onClick={() => setActiveTab(cat.key)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium border transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-transparent text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-primary/10 hover:border-primary hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Panel */}
        <div
          role='tabpanel'
          id={`panel-${activeCategory.key}`}
          aria-labelledby={`tab-${activeCategory.key}`}
        >
          {activeCategory.images.length === 0 ? (
            <div className='flex items-center justify-center py-16 md:py-24 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl'>
              <p className='text-gray-500 dark:text-gray-400 text-center px-4'>
                Images for <span className='font-semibold'>{activeCategory.label}</span> coming soon.
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5'>
              {activeCategory.images.map((img, index) => (
                <div
                  key={`${activeCategory.key}-${index}`}
                  className='relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3] bg-gray-100 dark:bg-gray-800'
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setLightboxSrc(img.src)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw'
                    className={`object-cover transition-transform duration-500 ${
                      hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className='absolute bottom-0 left-0 right-0 p-4'>
                      <h4 className='text-white text-base font-semibold leading-tight'>
                        {activeCategory.label}
                      </h4>
                      <p className='text-white/70 text-xs mt-1'>{img.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className='fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4'
          onClick={() => setLightboxSrc(null)}
          role='dialog'
          aria-modal='true'
        >
          <button
            type='button'
            aria-label='Close'
            className='absolute top-4 right-4 text-white text-3xl leading-none w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20'
            onClick={() => setLightboxSrc(null)}
          >
            &times;
          </button>
          <div
            className='relative w-full max-w-5xl h-[80vh]'
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxSrc}
              alt='Preview'
              fill
              sizes='100vw'
              className='object-contain'
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default PortfolioList
