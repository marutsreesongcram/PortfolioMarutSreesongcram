import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from "react-parallax-tilt";

function Portfolio() {
  return (
    <div className={styles.port_con}>
        <h3 className={styles.port_title}>Portfolio</h3>
        <div className={styles.port_list}>
            <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://unsplash.com/photos/laptop-computer-on-glass-top-table-hpjSkU2UYSU" alt="Project 1" />
                </Tilt>
                <p>Project Titles </p>
            </div>

            <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://unsplash.com/photos/graphs-of-performance-analytics-on-a-laptop-screen-JKUTrJ4vK00" alt="Project 2" />
                </Tilt> 
                <p>Project Titles </p>
            </div>

            <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://unsplash.com/photos/person-in-blue-shirt-writing-on-white-paper-8mikJ83LmSQ" alt="Project 3" />
                </Tilt>
                <p>Project Titles </p>
            </div>

            <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://unsplash.com/photos/black-and-silver-laptop-computer-tR0jvlsmCuQ" alt="Project 4" />
                </Tilt>
                <p>Project Titles </p>
            </div>

            <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://unsplash.com/photos/laptop-with-charts-on-a-desk-by-a-sunny-window-8OYcY9CRP_0" alt="Project 5" />
                </Tilt>
                <p>Project Titles </p>
            </div>

            <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://unsplash.com/photos/turned-on-black-laptop-1TFbqhRlCCc" alt="Project 6" />
                </Tilt>
                <p>Project Titles </p>
            </div>
        </div>    
    </div>
  )
}

export default Portfolio
