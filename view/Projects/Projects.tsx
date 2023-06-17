import { FramerBox, ProjectsGallery, TitleHeader } from '@/components'
import styles from './Projects.module.css'

export const Projects = () => {
  return (
    <section className={styles['projects-father--container']}>
      <TitleHeader spanHeader='Galeria' h1Header='Mis Proyectos'/>
      <div className={styles['projectsGallery-father--container']}>
        <ProjectsGallery/>
      </div>
      <FramerBox/>
    </section>
  )
}
