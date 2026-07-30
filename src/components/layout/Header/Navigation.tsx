import styles from '../Header/Header.module.css';
import {NavLink} from "react-router-dom";
export default function Navigation({className=""}) {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <ul className={styles.navList}>
        <li>
          <a href="#" className={styles.navLink}>База вопросов</a>
        </li>
        <li>
          <NavLink
            to="/collections"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
            }
          >
            Коллекции
          </NavLink>
        </li>
        <li>
          <a href="#" className={styles.navLink}>Тренажёр</a>
        </li>
        <li>
          <a href="#" className={styles.navLink}>Материалы</a>
        </li>
        <li>
          <a href="#" className={styles.navLink}>Навыки (hh)</a>
        </li>
      </ul>
    </nav>
  )
}