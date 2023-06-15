import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles['about-father--container']}>
        <div className={styles['about-imageProfile--container']}>
            Image
        </div>
        <div className={styles['about-callAction--container']}>
            <div className={styles['about-callAction-child--container']}>
                <span className={styles['about-callAction-child--span']}>SOBRE MI</span>
                <h1 className={styles['about-callAction-child--h1']}>Hola, soy HarolDev <span>Full Stack Developer!</span></h1>
                <p className={styles['about-callAction-child--p']}>Soy un desarrollador apasionado por crear soluciones digitales. Mi objetivo es combinar diseño y desarrollo para construir experiencias web excepcionales.</p>
                <button className={styles['about-callAction-child--button']}>Ver Cv</button>
            </div>
        </div>
    </section>
  )
}
