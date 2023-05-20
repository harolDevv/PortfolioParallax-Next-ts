import Head from "next/head"

//components
import { FC, PropsWithChildren } from "react"
import { Footer, Navbar } from "./"

//logo
const Logo = 'https://res.cloudinary.com/dnur99s4h/image/upload/v1684527908/logo_inc8eu.png'

//styles
import styles from './styles/Layout.module.css'


interface Props{
    title?:string
}
const origin = (typeof window === 'undefined' ) ? '' : window.location.origin

export const Layout:FC<PropsWithChildren<Props>> = ({children,title}) => {
  return (
    <>
    <Head>
        <title>{title || 'HarolDev'}</title>
        <meta name="description" content="My personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={Logo} />
    </Head>
        <main className={styles['layout-father--container']}>
            <Navbar />
            {children}
            <Footer/>
        </main>
    </>
  )
}
