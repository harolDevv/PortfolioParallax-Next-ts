import { PlaySound } from '@/assets'
import { AppContext } from '@/Context/AppProvider'
import {motion } from 'framer-motion'
import { useContext, useEffect, useRef, useState } from 'react'
import styles from './BurguerMenu.module.css'


export const BurguerMenu = () => {
    const menuRef = useRef<HTMLDivElement>(null);
    const { pageState,setPageState } = useContext(AppContext);
    const menuLinks = ['Inicio' , 'Sobre mi' , 'Experiencia' , 'Proyectos' , 'Testimonios']
    const variants = {
        open:{
            transition:{staggerChildren: 0.07, delayChildren: 0.2}
        }, 
        closed:{
            transition:{staggerChildren: 0.05, delayChildren: -1 }
        }
    }
    const [menu, setMenu] = useState('close')

    const menuAction = () => {
        if (menu === 'close') {
            return setMenu('open')
        }
        setMenu('close')
    }
    
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node) ) {
            setMenu('close')
        }
      };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = (link:string) => {
    setPageState(link)
    PlaySound('/sounds/efectoEncima.ogg')
  }

  return (
    <motion.div className={styles['BurguerMenur-father__container']}>
        <motion.div
        onClick={menuAction} 
        className={` ${menu === 'open' ?  styles['BurguerMenu-open'] : styles['BurguerMenu-close']}`}
        variants={variants}
        ref={menuRef}
        >
            {
                menu === 'open' ?
                (
                    menuLinks.map((link, index) => (
                        <motion.span
                        onClick={ () => handleClick(link) }
                        className={`${styles['BurguerMenu-items']} ${pageState === link && styles['Item-visit']}`}
                        initial={{y: 20 , opacity:0}}
                        animate={{ y:0 , opacity: 1}}
                        transition={{duration:.2 ,delay: Number(`.${Math.floor(index + 2.8)}`) , y:{stiffness:1000, velocity:-100}}}
                        key={index}>{link}</motion.span>
                    ))
                ) : null
            }
        </motion.div>
    </motion.div>
  )
}
