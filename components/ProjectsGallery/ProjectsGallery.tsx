import { ProjectsInfo } from '@/assets'
import { ProjectItem } from '@/components'
import Link from 'next/link';
import { useState } from 'react'
import styles from './ProjectsGallery.module.css'

interface Project {
  name: string;
  puesto: string;
  resume: string;
  codigo:string;
  deploy:string;
}

export const ProjectsGallery = () => {

  const [GalleryFoco, setGalleryFoco] = useState(ProjectsInfo[0])

  const handleSetGalleryFoco = (project:Project) => {
    setGalleryFoco(project)
  }
  return (
    <div className={styles['ProjectsGallery-father__container']}>
        <div className={styles['ProjectsGallery-selection']}>
          <div className={styles['ProjectsGallery-selection-info']}>
            <h3>{GalleryFoco.name}</h3>
            <p>{GalleryFoco.resume}</p>
            <Link href={GalleryFoco.codigo} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                Ver el codigo 
              </a>
            </Link>
            <Link href={GalleryFoco.deploy} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                Ver el proyecto
              </a>
            </Link>
          </div>
          <div></div>
        </div>
        <div className={styles['ProjectsGallery-options']}>
          {
            ProjectsInfo.map((project, index) => (
              <ProjectItem key={index} project={project} GalleryFoco={GalleryFoco} handleSetGalleryFoco={handleSetGalleryFoco}/>
            ))
          }
        </div>
    </div>
  )
}
