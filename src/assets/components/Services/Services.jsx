import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaDesktop, FaPaintBrush } from 'react-icons/fa6'

function Services() {
  return (
    <div className={styles.services_con}>
        <h3 className='{styles.services_title}'>My Services</h3>
        <div className={styles.services_list}></div>
            <div className={styles.services_item}></div>
                <FaCode />
                <h4>Web Development</h4>
                <p> I create responsive and user-friendly websites using the latest web technologies.</p>

            <div className={styles.services_item}></div>
                <FaDesktop />
                <h4>Web Development</h4>
                <p> I create responsive and user-friendly websites using the latest web technologies.</p>

            <div className={styles.services_item}></div>
                <FaPaintBrush />
                <h4>Web Development</h4>
                <p> I create responsive and user-friendly websites using the latest web technologies.</p>
    </div>

    
  )
}

export default Services
