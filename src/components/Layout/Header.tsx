import React from 'react'
import { LogoIcon } from 'components/icons'
import styles from './styles.module.scss'
import ActiveLink from 'components/ActiveLink'
import Button from 'components/Button/Button'
import { FiX, FiMenu } from 'react-icons/fi'
import Link from 'next/link'

const navList = (
  <ul className={styles.navlist}>
    <li>
      <ActiveLink exact href="/">
        خانه
      </ActiveLink>
    </li>
    <li>
      <ActiveLink exact href="/products">
        محصولات
      </ActiveLink>
    </li>
    <li>
      <ActiveLink exact href="/services">
        خدمات
      </ActiveLink>
    </li>
    <li>
      <ActiveLink exact href="/blog">
        وبلاگ
      </ActiveLink>
    </li>
  </ul>
)

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    const toggleMenuIcon = () => window.innerWidth >= 960 && setOpenNav(false)

    window.addEventListener('resize', toggleMenuIcon)
    return () => window.removeEventListener('resize', toggleMenuIcon)
  }, [])

  return (
    <header className={styles.header}>
      <nav className="container flex items-center justify-between">
        <LogoIcon />
        <div className="hidden h-full lg:block">{navList}</div>
        <div className="hidden flex-1 justify-end lg:flex">
          <Button disabled className="btn-outline-primary">
            ورود
          </Button>
        </div>
        <button
          className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <FiX fontSize={20} /> : <FiMenu fontSize={20} />}
        </button>
      </nav>
      {openNav && (
        <div className={styles.mobileNav}>
          {navList}
          <Link href="/register">
            <Button className="mb-2">
              <span>نام‌نویسی</span>
            </Button>
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
