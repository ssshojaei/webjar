import Link from 'next/link'
import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'

type IBreadCrumbs = {
  pages: {
    link?: string
    label: string
  }[]
}

const Breadcrumbs = ({ pages = [] }: IBreadCrumbs) => {
  const lastItem = pages.length - 1

  return (
    <nav className="flex py-2" aria-label="Breadcrumb">
      <ol className="inline-flex items-center">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <span className="mx-1">خانه</span>
          </Link>
        </li>
        {pages.slice(0, lastItem).map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <FiChevronLeft />
              <Link
                href={item?.link || '#'}
                className="mx-1 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {item?.label}
              </Link>
            </div>
          </li>
        ))}
        <li aria-current="page">
          <div className="flex items-center">
            <FiChevronLeft />
            <span className="mx-1 text-sm font-medium text-green-500">
              {pages[lastItem]?.label}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs
