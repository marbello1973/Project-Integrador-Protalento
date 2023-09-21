import Search from "../Search/Search";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar() {
  const location = useLocation();
  const isExcludePage =
    location.pathname === "/about" || location.pathname === "/login";

  return (
    <>
      <nav className={styles.navContainer}>
        <div>{!isExcludePage && <Search />}</div>
        <div className={styles.container}>
          <ul className={styles.ulContainer}>
            <li>
              <Link to="/about" className={styles.menu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/home" className={styles.menu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/tarea" className={styles.menu}>
                Tareas
              </Link>
            </li>
            <li>
              <Link to="/login" className={styles.menu}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
