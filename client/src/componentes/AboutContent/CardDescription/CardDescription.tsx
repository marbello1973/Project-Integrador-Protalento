import styles from "./CardDescription.module.css";
function CardDescription() {
  return (
    <div className={styles.container}>
      <h1 className={styles.texto}>
        Nuestra aplicación de gestión de tareas te permite organizar y realizar
        un seguimiento eficiente de tus tareas diarias. Con características
        intuitivas y fáciles de usar, puedes crear, editar y eliminar tareas,
        asignar prioridades, establecer fechas de vencimiento y mantener un
        control completo de tus responsabilidades. Simplifica tu vida cotidiana
        y aumenta tu productividad con nuestra aplicación de gestión de tareas.
      </h1>
    </div>
  );
}

export default CardDescription;
