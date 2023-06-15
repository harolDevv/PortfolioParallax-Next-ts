import { TitleHeader } from '@/components'
import styles from './Projects.module.css'

export const Projects = () => {
  return (
    <section className={styles['projects-father--container']}>
      <TitleHeader spanHeader='Galeria' h1Header='Mis Proyectos'/>
    </section>
  )
}
