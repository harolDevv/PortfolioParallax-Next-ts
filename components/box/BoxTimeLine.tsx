import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from './BoxTimeLine.module.css'

interface Props{
    BoxDate: string;
    BoxHeaderInfo: string;
    BoxBody:string;
    className: string;
    delayAnimation:number;
}

export const BoxTimeLine:FC<Props> = ({BoxDate,BoxBody,BoxHeaderInfo, className,delayAnimation}) => {
  return (
    <motion.div 
    initial={{opacity:0, scale:0}}
    animate={{opacity:1, scale:1}}
    transition={{duration:.3, delay:delayAnimation}}
    className={`${styles['box--container']} ${styles[className]}`}>
        <div className={styles['box--header']}>
            <span className={styles['box--header-date']}>{BoxDate}</span> 
            <span className={styles['box--header-info']}>{BoxHeaderInfo}</span>
        </div>
    <div className={styles['box--body']}>{BoxBody}</div>
    </motion.div>
  )
}
