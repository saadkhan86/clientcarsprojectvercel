import { useState } from "react"
import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}>
        SrfAuto<span className={styles.logo2}>Parts</span>
      </h2>

      <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
        <li>
          <NavLink
            to="/home"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.linkTag
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.linkTag
            }
          >
            Products
          </NavLink>
        </li>

        {/* <li>
          <NavLink
            to="/auth"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.linkTag
            }
          >
            Sign in
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.linkTag
            }
          >
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.linkTag
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
