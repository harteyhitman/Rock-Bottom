'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Button from '../buttons'
import styles from './nav-menu.module.scss'

const links = [
  { name: 'About Us', href: '/About' },
  { name: 'Volunteer ', href: '/Volunteer ' },
  { name: 'Login', href: '/Login' },
  { name: 'Register', href: '/Register' },
]
export default function NavMenu() {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {links.map((link) => (
            <li key={link.href} className={styles.li}>
              <Link href={link.href}>
                <motion.span
                  className={`${styles.link} ${
                    pathname === link.href ? styles.active : styles.inactive
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button label='Donate Now' />
    </header>
  )
}
