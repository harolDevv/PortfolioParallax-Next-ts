import styles from './Line.module.css'

export const Line = () => {
  return (
    <div className={styles['line-container']}>

        <div className={styles['line-point']}>
            <span className={styles['point']}></span>
        </div>

        <div className={styles['line']}></div>

        <div className={styles['line-point']}>
            <span className={styles['point']}></span>
        </div>

        <div className={styles['line']}></div>
        
        <div className={styles['line-point']}>
            <span className={styles['point']}></span>
        </div>

        <div className={styles['line']}></div>
        
        <div className={styles['line-point']}>
            <span className={styles['point']}></span>
        </div>
    </div>
  )
}
