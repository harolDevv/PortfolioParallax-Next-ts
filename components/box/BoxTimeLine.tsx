import { FC } from 'react';
import styles from './BoxTimeLine.module.css'

interface Props{
    BoxDate: string;
    BoxHeaderInfo: string;
    BoxBody:string;
    className: string;
}

export const BoxTimeLine:FC<Props> = ({BoxDate,BoxBody,BoxHeaderInfo, className}) => {
  return (
    <div className={`${styles['box--container']} ${styles[className]}`}>
        <div className={styles['box--header']}>
            <span className={styles['box--header-date']}>{BoxDate}</span> 
            <span className={styles['box--header-info']}>{BoxHeaderInfo}</span>
        </div>
    <div className={styles['box--body']}>{BoxBody}</div>
    </div>
  )
}
