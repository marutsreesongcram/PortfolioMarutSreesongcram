import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

function Contact() {
    return (
        <div className={styles.contact_wrapper}>
            <div className={styles.contact_con}>
                <div className={styles.contact_info}>
                    <h3>Get in touch</h3>
                    <p className={styles.contact_desc}>
                        Transforming raw data into clear, interactive dashboards and strategic insights.
                        <br />I help teams see the story behind the numbers to make smarter decisions.
                    </p>

                    <p className={styles.contact_desc}>
                        Turning complex, unstructured data into predictive models and actionable insights.
                        <br />I bridge the gap between heavy statistics and real-world business impact.
                    </p>

                    <p>
                        366 Ramkhamhaeng 53, Phlapphla Subdistrict,
                        <br />Wang Thonglang District, Bangkok 10310
                    </p>
                    <p>
                        <FaPhone /> +66 98 061 9799
                    </p>
                    <p>
                        <FaEnvelope /> Marut100337@Gmail.com
                    </p>
                </div>

                <div className={styles.contact_form}>
                    <form action="">
                        <div className={styles.input_group}>
                            <div>
                                <label htmlFor="first-name">First Name</label>
                                <input id="first-name" type="text" placeholder="eg. Jone" />
                            </div>
                            <div>
                                <label htmlFor="last-name">Last Name</label>
                                <input id="last-name" type="text" placeholder="eg. Doe" />
                            </div>
                        </div>

                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" placeholder="eg. Johndoe@gmail.com" />

                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" cols="30" rows="10" placeholder="Type your message here..."></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
