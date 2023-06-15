import Image from 'next/image';
import { FC } from 'react'
import styles from './CardTestimonial.module.css'

interface Props{
    CardBody: string;
    CardFooter:string[];
    CardImage: string;
    inFoco:string;
}
export const CardTestimonials:FC<Props> = ({CardBody, CardFooter, CardImage, inFoco}) => {
    const truncatedCardBody = CardBody.length > 245 ? CardBody.slice(0, 245) + '' : CardBody;
    return (
    <div className={`${styles['Card-Testimonials--container']} ${styles[inFoco]}`}>
         <div className={styles['Card-Testimonials--header']}>
            <span>&#44;&#44;</span> 
        </div> 
        <div className={styles['Card-Testimonials--body']}>
        <p>
            {truncatedCardBody}{' '}
            <a href="https://www.linkedin.com/in/harold-full-stack/" target="_blank" rel="noopener noreferrer">
            ...ver más
            </a>
        </p> 
        </div>
        <div className={styles['Card-Testimonials--footer']}>
            <div className={styles['Card--footer-img_container']}>
                <Image width={50} height={50} src={CardImage} alt={`Imagen de ${CardFooter[0]}`}/>
            </div>
            <div className={styles['Card--footer-info_container']}>
                <h3>{CardFooter[0]}</h3>
                <span>{CardFooter[1]}</span>
            </div>
        </div>
    </div>
  )
}
