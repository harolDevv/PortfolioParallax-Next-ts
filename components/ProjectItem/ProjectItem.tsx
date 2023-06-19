

import { FC, SetStateAction } from 'react';
import styles from './ProjectItem.module.css'
//iconos
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import { motion } from 'framer-motion';
import { PlaySound } from '@/assets';



interface Props{
    project:Project;
    GalleryFoco:Project
    handleSetGalleryFoco: (project: Project) => void;
    index:number;
}

interface Project {
    name: string;
    puesto: string;
    resume: string;
    codigo:string;
    deploy:string;
    image:string;
  }

  
  export const ProjectItem:FC<Props> = ({project , GalleryFoco ,handleSetGalleryFoco,index}) => {
  
    const handleClick = () => {
    handleSetGalleryFoco(project)
    PlaySound('/sounds/soundClickFile.mp3')
  }

  return (
    <motion.div 
    initial={{opacity:0, scale:0}}
    animate={{opacity:1, scale:1}}
    transition={{duration:.2, delay:index}}
    className={`${styles['projectItem-container']} ${GalleryFoco.name === project.name && styles['Project-foco']}`} 
    onClick={ handleClick }>
        <div className={styles['projectItem-image']}>
            {project.puesto === 'Proyecto personal' ? <AccountCircleIcon /> : <VerifiedIcon />}
        </div>
        <div className={styles['projectItem-info']}>
            <h4>{project.name}</h4>
            <span>{project.puesto}</span>
        </div>
    </motion.div>
  )
}
