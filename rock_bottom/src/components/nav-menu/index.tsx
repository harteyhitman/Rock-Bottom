'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Button from '../../components/buttons'
import styles from './nav-menu.module.scss'

const links = [
  { name: 'About Us', href: '/about' },
  { name: 'Volunteer ', href: '/volunteer' },
  { name: 'Login', href: '/login' },
  { name: 'Register', href: '/register' },
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
      <Link href='/donate'>
      <Button label='Donate Now' />
      </Link>
    </header>
  )
}


