

// images
export const MountBack = 'https://res.cloudinary.com/dnur99s4h/image/upload/v1684527907/mount3_gstc0m.png'
export const MountFirst = 'https://res.cloudinary.com/dnur99s4h/image/upload/v1684527908/mount1_ieeran.png'
export const MountSecond = 'https://res.cloudinary.com/dnur99s4h/image/upload/v1684527908/mount2_zkgsdy.png'
export const Background = 'https://res.cloudinary.com/dnur99s4h/image/upload/v1684539188/Background_wsc2ez.jpg'
export const letras = 'https://res.cloudinary.com/dnur99s4h/image/upload/v1684527909/letras_yi5siq.png'
export const CloudBack = 'https://res.cloudinary.com/dnur99s4h/image/upload/v1684527908/fog_2_auavoo.png'
export const Cloud2 = 'https://res.cloudinary.com/dnur99s4h/image/upload/v1684527907/fog_4_gireql.png'

import {  useEffect, useRef, useState } from 'react'
import Image from 'next/image'

//estilos
import styles from './LandingPage.module.css'
import { FramerBox } from '@/components'
import { motion } from 'framer-motion'

interface CursorPosition {
    x: number;
    y: number;
}


export const LandingPage = () => {
    
    const parallax_el = useRef<(HTMLImageElement | HTMLElement | null)[]>([]);
    const [cursorPos, setCursorPos] = useState<CursorPosition>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event:MouseEvent) => {
            setCursorPos({ x: event.clientX - window.innerWidth / 2, y: event.clientY - window.innerHeight / 2 });
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [])

    useEffect(() => {
        const parallaxElements = parallax_el.current;
        parallaxElements.forEach((el) => {
        if(el === null) return
        const speedX = Number(el.dataset.speedx);
        const speedY = Number(el.dataset.speedy);
        const isMountain = el.classList.contains(styles['mountain'])
        if (isMountain){
            el.style.transform = `translateX(calc(${-cursorPos.x * speedX}px)) translateY(calc(${-cursorPos.y * speedY}px))`;
        }else{
            el.style.transform = `translateX(calc(${-cursorPos.x * speedX}px)) translateY(calc(${-cursorPos.y * speedY}px)) `;
        }
        });

    }, [cursorPos])
    

  return (
    <main className={styles['landing-page--container']}>
        <Image priority={true} width={200} height={43} src={letras} alt="letters logo" className={styles['landing-page--logo-letters']}/>
        <Image priority={true} width={1000} height={200} ref={(el) => (parallax_el.current[0] = el)} src={Background} alt='Backgorund Mountains' data-speedx='0.1' data-speedy='0.1'  className={`${styles['parallax']} ${styles['lading-page-Background']}`}/>
        <div ref={(el) => (parallax_el.current[1] = el)} className={`${styles['parallax']} ${styles['landing-page-text--container']}`} data-speedx='0.06' data-speedy='0.052'>
            <h1 className={styles['landing-page--h1-fullstack']}>FULL STACK DEVELOPER</h1>
            <h2 className={styles['landing-page--h2-frontend']}>FRONT END</h2>
        </div>
        <Image priority={true} width={500} height={500}   ref={(el) => (parallax_el.current[2] = el)} src={MountBack} alt="Img Mount BackLeft" data-speedx='0.04' data-speedy='0.03' className={`${styles['mountain']} ${styles['parallax']} ${styles['lading-page-mountBackLeft']}`} />
        <Image priority={true} width={500} height={500}   ref={(el) => (parallax_el.current[3] = el)} src={MountFirst} alt="Img Mount first" data-speedx='0.02' data-speedy='0.04' className={`${styles['mountain']} ${styles['parallax']} ${styles['landing-page-mountFirst']}`} />
        <Image priority={true} width={600} height={500}   ref={(el) => (parallax_el.current[4] = el)} src={MountBack} alt="Img Mount Back" data-speedx='0.05' data-speedy='0.08' className={`${styles['mountain']} ${styles['parallax']} ${styles['lading-page-mountBack']}`} />
        <Image priority={true} width={500} height={500}   ref={(el) => (parallax_el.current[5] = el)} src={MountSecond} alt="Img Mount second" data-speedx='0.04' data-speedy='0.032' className={`${styles['mountain']} ${styles['parallax']} ${styles['lading-page-mountSecond']}`} />
        <Image priority={true} width={500} height={500}   ref={(el) => (parallax_el.current[6] = el)} src={MountBack} alt="Img Mount BackRight" data-speedx='0.055' data-speedy='0.02' className={`${styles['mountain']} ${styles['parallax']} ${styles['lading-page-mountBackRight']}`} />
        <Image priority={true} width={500} height={500}   ref={(el) => (parallax_el.current[7] = el)} src={Cloud2} alt="Img Cloud" data-speedx='0.1' data-speedy='0.02' className={`${styles['parallax']} ${styles['landing-page-cloud2']}`}/>
        <Image priority={true} width={500} height={500}   ref={(el) => (parallax_el.current[8] = el)} src={CloudBack} alt="Img CloudBack" data-speedx='0.1' data-speedy='0.05'  className={`${styles['parallax']} ${styles['landing-page-cloudBack']}`}/>
        <FramerBox/>
    </main>
  )
}
