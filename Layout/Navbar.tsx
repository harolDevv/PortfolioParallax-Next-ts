import Image from 'next/image'
import styles from './styles/Navbar.module.css'

//iamges
const Logo = 'https://res.cloudinary.com/dnur99s4h/image/upload/v1684527908/logo_inc8eu.png'

export const Navbar = () => {
  return (
    <nav>
        <nav className={styles['navbar--container']}>
            <div className={styles['navbar-logo--container']}>
                <Image height={100} width={100}  src={Logo}  alt='Logo Haroldev' className={styles['navbar-logo']}/>.
            </div>
            <div className={styles['navbar-anchor--container']}>
                <a href="" className={styles['navbar-anchor']}>Proyectos</a>
                <a href="" className={styles['navbar-anchor']}>Sobre mi</a>
                <a href="" className={styles['navbar-anchor']}>Experiencia</a>
                <a href="" className={styles['navbar-anchor']}>Contáctame</a>
            </div>
        </nav>
    </nav>
  )
}
