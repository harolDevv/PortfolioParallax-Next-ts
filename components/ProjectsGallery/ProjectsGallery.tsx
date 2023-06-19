import { ProjectsInfo } from '@/assets'
import { ProjectItem } from '@/components'
import Link from 'next/link';
import { useState } from 'react'
import styles from './ProjectsGallery.module.css'


//iconos
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {motion} from 'framer-motion';
import Image from 'next/legacy/image';


interface Project {
  name: string;
  puesto: string;
  resume: string;
  codigo:string;
  deploy:string;
  image:string;
}

export const ProjectsGallery = () => {

  const [GalleryFoco, setGalleryFoco] = useState(ProjectsInfo[0])

  const handleSetGalleryFoco = (project:Project) => {
    setGalleryFoco(project)
  }
  return (
    <div className={styles['ProjectsGallery-father__container']}>
        <motion.div className={styles['ProjectsGallery-selection']}
        initial={{opacity:1, scaleX:0}}
        animate={{opacity:1, scaleX:1}}
        transition={{duration:.5, delay:.1, ease:'easeOut'}}
        >
          <div className={styles['ProjectsGallery-selection-info']}>
            <motion.h3
            initial={{opacity:0, y:10}}
            animate={{opacity:1, y:0}}
            transition={{duration:.2, delay:.5}}
            >{GalleryFoco.name}</motion.h3>
            <motion.p
            initial={{opacity:0, y:10}}
            animate={{opacity:1, y:0}}
            transition={{duration:.2, delay:.7}}
            >{GalleryFoco.resume}</motion.p>
            <motion.div 
            initial={{opacity:0, y:10}}
            animate={{opacity:1, y:0}}
            transition={{duration:.2, delay:.9}}
            className={styles['ProjectsGallery-selection-links']}>
                <Link href={GalleryFoco.codigo} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    Ver el codigo <KeyboardArrowRightIcon/>
                  </a>
                </Link>
                <Link href={GalleryFoco.deploy} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    Ver el proyecto < KeyboardArrowRightIcon/>
                  </a>
                </Link>
            </motion.div>
            <motion.a href="https://www.linkedin.com/in/harold-full-stack/details/projects/"
            target="_blank" rel="noopener noreferrer"
            className={styles['ProjectsGallery-selection-info-allProjects']}
            initial={{opacity:0, y:10}}
            animate={{opacity:1, y:0}}
            transition={{duration:.2, delay:1.1}}
            >
              Ver todos los Proyectos
            </motion.a>
          </div>
          <motion.div 
          initial={{opacity:0, y:10}}
          animate={{opacity:1, y:0}}
          transition={{duration:.2, delay:1.3}}
          className={`${styles[`ProjectsGallery-selection-info-image-${GalleryFoco.image}`]}`}>
            {/* <Image 
            className={styles['ProjectsGallery-selection-info-imageNext']}
            src={GalleryFoco.image}
            alt="Project Image"
            width={'100%'}
            /> */}
          </motion.div>
        </motion.div>
        <div className={styles['ProjectsGallery-options']}>
          {
            ProjectsInfo.map((project, index) => (
              <ProjectItem key={index} project={project} GalleryFoco={GalleryFoco} handleSetGalleryFoco={handleSetGalleryFoco} index={Number(`.${Math.floor(index + 3)}`)}/>
            ))
          }
        </div>
    </div>
  )
}
