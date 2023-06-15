import { BurguerMenu } from "@/components"
import { AppContext } from "@/Context/AppProvider"
import { About, LandingPage, Projects, Testimonios, Timeline } from "@/view"
import { useContext, useState } from "react"
import styles from '../styles/Home.module.css'


export default function Home() {
  const { pageState } = useContext(AppContext);
  const views = {
    LandingPage: <LandingPage />,
    About: <About />,
    Timeline: <Timeline />,
    Projects: <Projects />,
    Testimonios: <Testimonios />
  };

  const renderComponent = () => {
    switch (pageState) {
      case 'Inicio':
        return views.LandingPage;
      case 'Sobre mi':
        return views.About;
      case 'Experiencia':
        return views.Timeline;
      case 'Proyectos':
        return views.Projects;
      case 'Testimonios':
        return views.Testimonios;
      default:
        return null;
    }
  };
  return (
    <main className={styles['main-father--container']}>
      <BurguerMenu />
      {renderComponent()}
    </main>
  );
}
