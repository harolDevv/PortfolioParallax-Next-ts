import { BoxTimeLine, FramerBox, Line, TitleHeader } from '@/components'
import { FC } from 'react'
import styles from './Timeline.module.css'
export const Timeline:FC = () => {
  return (
    <section className={styles['timeline-father--container']}>
      <TitleHeader spanHeader={'Linea de Tiempo'} h1Header={'Mi Historia Laboral'} />
      <div className={styles['line-father--container']}>
        <div className={styles['line-boxes--container']}>
          <BoxTimeLine 
          className='box1' 
          BoxDate='2018 - 2021' 
          BoxHeaderInfo='Auto didacta'
          BoxBody='Mi camino comenzó siendo un joven de 15 años que se interesó en la programación 💻 que luego se sumergiría en el apasionante mundo del desarrollo web y diseño 🎨. Aprendí por mi cuenta mientras exploraba diversos cursos y creaba proyectos propios. ¡Así es como mi trayectoria se fue tejiendo! 🌐' 
          delayAnimation={.5}/>

          <BoxTimeLine 
          className='box2' 
          BoxDate='2022' 
          BoxHeaderInfo='Henry Projects' 
          BoxBody='Una vez complete el Bootcamp, puse en práctica todos mis conocimientos a través de una serie de proyectos. Trabajando en equipo y utilizando metodologías ágiles, pude consolidar mis habilidades y aplicar todo lo aprendido. Fue una experiencia enriquecedora que me permitió crecer tanto profesional como personalmente. 🚀' 
          delayAnimation={.9}/>
        </div>
        <Line />
        <div className={styles['line-boxes--container']}>
          <BoxTimeLine 
          className='box3' 
          BoxDate='2022' 
          BoxHeaderInfo='Henry Bootcamp' 
          BoxBody='Buscando impulsar mi carrera y perfeccionar mis habilidades, me uní al bootcamp de Henry. Allí, junto a una increíble comunidad, me sumergí en el mundo del desarrollo FullStack, aprendiendo nuevas habilidades y trabajando en emocionantes proyectos. ¡Fue un viaje lleno de aprendizaje y conexiones maravillosas! 💻🚀👩‍💻' 
          delayAnimation={.7}/>

          <BoxTimeLine 
          className='box4' 
          BoxDate='2022' 
          BoxHeaderInfo='Restoner' 
          BoxBody='Obtuve mi primera oportunidad como Frontend Developer y mi pasión por el desarrollo de software ha sido constante. Cada día me desafío a mí mismo y me sumerjo en proyectos emocionantes. ¡Como Software Developer, mi camino de aprendizaje nunca se detiene y estoy emocionado por lo que el futuro me tiene reservado! 🌟' 
          delayAnimation={1.1}/>
        </div>
      </div>
      <FramerBox/>
    </section>
  )
}
