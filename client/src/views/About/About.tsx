import styles from "./About.module.css";
import svg from "../../assets/pluma.svg";
import CardDescription from "../../componentes/AboutContent/CardDescription/CardDescription";
import Dev from "../../componentes/AboutContent/Dev/Dev";
import Skill from "../../componentes/AboutContent/Skill/Skill";

export default function About() {
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.containerCircle}></div>
          <div className={styles.containerCircle1}></div>
          <div className={styles.containerCircle2}></div>
          <div className={styles.containerCircle3}></div>
          <div>
            <CardDescription />
          </div>
          <div className={styles.containerImagen}>
            <img src={svg} alt="svg" />
          </div>
        </div>
        <div>
          <Dev />
        </div>
        <div>
          <Skill />
        </div>
      </div>
    </>
  );
}
