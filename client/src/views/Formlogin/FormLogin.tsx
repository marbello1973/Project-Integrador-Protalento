import { useState } from "react";
import Search from "../../componentes/Search/Search";
import styles from "./FormLogin.module.css";

export function FormLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit: React.DOMAttributes<HTMLFormElement>["onSubmit"] = (
    e
  ) => {
    e.preventDefault();

    // Verificar si las contraseñas coinciden
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Aquí puedes realizar la lógica de autenticación, como enviar los datos al servidor, etc.
    // Por ahora, solo imprimimos los datos en la consola.
    console.log("Correo electrónico:", formData.email);
    console.log("Contraseña:", formData.password);

    // Reiniciar el formulario
    setFormData({ email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Verificar Contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}
