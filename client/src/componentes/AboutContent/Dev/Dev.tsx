import styles from "./Dev.module.css";
import imagen from "../../../assets/David.jpg";
function Dev() {
  return (
    <div className={styles.container}>
      <div className={styles.containerImgText}>
        <div className={styles.imagen}>
          <img className={styles.img} src={imagen} alt="imagen" />
        </div>
        <div className={styles.text}>
          Full Stack Developer con competencias para la creación, desarrollo e
          implementación de aplicaciones web. Competente en el desarrollo tanto
          del cliente como el servidor, utilizando tecnologías como HTML, CSS,
          JavaScript, React, Node.js, y base de datos, desde las cuales, genero
          soluciones digitales que maximicen la tasa de enganche de los usuarios
          a los servicios en línea. Caracterizado por la innovación, la solución
          creativa de problemas y el trabajo en equipo, así como adaptabilidad a
          nuevos entornos de trabajo, pensamiento crítico, gestión del tiempo,
          orientación al detalle y proactividad. Estoy emocionado por encontrar
          nuevas oportunidades donde pueda aplicar mi experiencia y contribuir
          al desarrollo de soluciones
        </div>
      </div>
    </div>
  );
}

export default Dev;
