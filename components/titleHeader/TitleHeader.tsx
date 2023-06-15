import { FC } from 'react'
import styles from './titleHeader.module.css'

interface Props{
    spanHeader?:string;
    h1Header:string;
}
export const TitleHeader:FC<Props> = ({spanHeader,h1Header}) => {
  return (
    <>
    <span className={styles['global-span']}>{spanHeader}</span>
    <h1 className={styles['global-title']}>{h1Header}</h1>
    </>
  )
}
