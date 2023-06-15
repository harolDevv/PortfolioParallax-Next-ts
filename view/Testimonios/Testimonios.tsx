import { CardTestimonials, TitleHeader } from '@/components'
import { Testimonial } from '@/assets'
import styles from './Testimonios.module.css'

export const Testimonios = () => {
  return (
    <section className={styles['testimonial-father--container']}>
      <TitleHeader spanHeader='Testimonios' h1Header='Recomendaciones'/>
      <div className={styles['Cards-testimonial-father_container']}>
        <div className={styles['Cards_container']}>
          {
            Testimonial.map((testimonio, index) => (
              <CardTestimonials 
              key={index}  
              inFoco={index === 1 ? 'enfoco' : 'noenfoco'}
              CardBody={testimonio.Recomendacion} 
              CardFooter={[testimonio.Name, testimonio.Puesto]} 
              CardImage={testimonio.image}/>
            ))
          }
          {/* <CardTestimonials 
            CardBody='sghjagsjhdgjsahdgjashgdadjhasgdja sghjagsjhdgjsahdgjashgdadjhasgdjasghjagsjhdgjsahdgjashgdadjhasgdja jdgqwduwqgdwhbdjhwqbdkwqj'  
            CardFooter={['Fran' , 'Software Developer']}
            /> */}
        </div>
      </div>
    </section>
  )
}
