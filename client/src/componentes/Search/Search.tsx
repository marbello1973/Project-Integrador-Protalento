import styles from "./Search.module.css";
function Search() {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        className={styles.inputBuscar}
      />
      <button type="button" className={styles.buttonBuscar}>
        Buscar
      </button>
    </div>
  );
}

export default Search;
