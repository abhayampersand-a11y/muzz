import React, { FC } from 'react'
import Link from 'next/link'

interface BreadcrumbProps {
  links: { href: string; text: string }[]
}

const Breadcrumb: FC<BreadcrumbProps> = ({ links }) => {
  const lastIndex = links.length - 1
  return (
    <nav
      aria-label="Breadcrumb"
      className="my-[0.9375rem] mx-0 px-4"
    >
      <ol className="flex items-center flex-wrap justify-center gap-x-2 gap-y-1 max-w-3xl mx-auto text-center">
        {links.map((link, index) => {
          const isLast = index === lastIndex
          return (
            <li
              key={index}
              className="flex items-center"
            >
              {isLast ? (
                <span className="dark:text-white text-midnight_text md:text-xl text-lg break-words">
                  {link.text}
                </span>
              ) : (
                <Link
                  href={link.href}
                  className="no-underline text-midnight_text dark:text-white/70 font-normal md:text-xl text-lg hover:underline"
                >
                  {link.text}
                </Link>
              )}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="inline-block w-2 h-2 ml-2 border-r-2 border-b-2 border-midnight_text dark:border-white -rotate-45"
                />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
