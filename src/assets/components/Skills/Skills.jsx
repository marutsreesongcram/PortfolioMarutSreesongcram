import React from 'react'
import styles from './Skill.module.css'
import { FaJs, FaSass, FaGitAlt, FaReact, FaNode } from 'react-icons/fa6'

function Skills() {
  return (
    <div className={styles.skill_con}>
        <h3 className={styles.skill_title}>My Skills Set</h3>
        <ul className={styles.skill_list}> 
            <li>
                <FaJs />
            </li>
            <li>
                <FaSass />
            </li>
            <li>
                <FaGitAlt />
            </li>
            <li>
                <FaReact />
            </li>
            <li>
                <FaNode />
            </li>
        </ul>
      
    </div>
  )
}

export default Skills
