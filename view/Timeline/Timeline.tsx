import { BoxTimeLine, Line, TitleHeader } from '@/components'
import { FC } from 'react'
import styles from './Timeline.module.css'
export const Timeline:FC = () => {
  return (
    <section className={styles['timeline-father--container']}>
      <TitleHeader spanHeader={'Linea de Tiempo'} h1Header={'Mi Historia Laboral'} />
      <div className={styles['line-father--container']}>
        <div className={styles['line-boxes--container']}>
          <BoxTimeLine className='box1' BoxDate='2018 - 2021' BoxHeaderInfo='Auto didacta' BoxBody='dbkwqbdjhqwbhdjhw'/>
          <BoxTimeLine className='box2' BoxDate='2022' BoxHeaderInfo='Henry Projects' BoxBody='dbkwqbdjhqwbhdjhw'/>
        </div>
        <Line />
        <div className={styles['line-boxes--container']}>
          <BoxTimeLine className='box3' BoxDate='2022' BoxHeaderInfo='Henry Bootcamp' BoxBody='dbkwqbdjhqwbhdjhw'/>
          <BoxTimeLine className='box4' BoxDate='2022' BoxHeaderInfo='Restoner' BoxBody='dbkwqbdjhqwbhdjhw'/>
        </div>
      </div>
    </section>
  )
}
