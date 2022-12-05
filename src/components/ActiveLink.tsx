import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type TActiveLink = {
  href: string
  exact?: boolean
  children: React.ReactNode
  [props: string]: any
}

const ActiveLink = ({
  href,
  exact = false,
  children,
  ...props
}: TActiveLink) => {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if (isActive) {
    props.className += ' active'
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}

export default ActiveLink
