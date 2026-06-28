import React, {use, useState} from 'react'
import styles from './Navbar.module.css' 
import {FaBars} from "react-icons/fa"

function Navbar() {

  const [isToggled, setToggls] = useState(false);

  function handleToggle() {
    setToggle(!isToggled) // false + false = true
  }

  return (
    <nav>
      <div className ={styles.container}>
        </div>
        <div className={styles.nav_con}> 
           <div className={styles.logo}>
              <a href="#">JD PORT</a>

        </div>

        <ul>
             <li><a href="#">Skills</a></li>
             <li><a href="#">Portfolio</a></li>
             <li><a href="#">Contact</a></li>
        </ul>

        <div className={styles.botton}>
          <a href="#">Hire Me</a>
        </div>

        {/* Mobile Menu */}
        <FaBars className={styles.bare} onClick={handleToggle} />
        {isToggled ? (
          <>
            <ul className={styles.Mobile_Menu}>
             <li><a href="#">Skills</a></li>
             <li><a href="#">Portfolio</a></li>
             <li><a href="#">Contact</a></li>
            </ul>
            <div className={styles.Mobile_button}>
              <a href='#'>Hire Me</a>
            </div>
          </>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar
