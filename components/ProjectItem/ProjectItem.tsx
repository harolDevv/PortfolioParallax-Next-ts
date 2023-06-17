import { FC, SetStateAction } from 'react';
import styles from './ProjectItem.module.css'
//iconos
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedIcon from '@mui/icons-material/Verified';


interface Props{
    project:Project;
    GalleryFoco:Project
    handleSetGalleryFoco: (project: Project) => void;
}

interface Project {
    name: string;
    puesto: string;
    resume: string;
    codigo:string;
    deploy:string;
  }

export const ProjectItem:FC<Props> = ({project , GalleryFoco ,handleSetGalleryFoco}) => {
  return (
    <div className={`${styles['projectItem-container']} ${GalleryFoco.name === project.name && styles['Project-foco']}`} onClick={ () => handleSetGalleryFoco(project)}>
        <div className={styles['projectItem-image']}>
            {project.puesto === 'Proyecto personal' ? <AccountCircleIcon /> : <VerifiedIcon />}
        </div>
        <div className={styles['projectItem-info']}>
            <h4>{project.name}</h4>
            <span>{project.puesto}</span>
        </div>
    </div>
  )
}
