import { motion, useIsPresent } from 'framer-motion'
import styles from './FramerBox.module.css'


export const FramerBox = () => {
    const isPresent = useIsPresent()
  return (
    <motion.div 
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.8, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.8, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className={styles["privacy-screen"]}
    />
  )
}
