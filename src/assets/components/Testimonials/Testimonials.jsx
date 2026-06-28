import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testimonials_con}>
        <h3 className={styles.testimonials_title}>Testimonials</h3>
        <div className={styles.testimonials_list}>
            <div className={styles.testimonial_items}>
                <p>
                    "Impressive work. The code architecture in your GitHub links is solid, and I love how you documented the model evaluation metrics."
                </p>
                <img src="https://unsplash.com/photos/a-woman-in-a-business-suit-posing-for-a-picture-x7ksVaD2_VI" alt="Client" />
                <h4>Vasna Sophonpanit</h4>
                <p className={styles.bio}>Machine Learning Engineer</p>
            </div>

            <div className={styles.testimonial_items}>
                <p>
                    "Excellent clean layout. The way you walk through your machine learning projects from data cleaning to deployment shows true data storytelling."
                </p>
                <img src="https://unsplash.com/photos/a-man-in-a-gray-suit-and-white-shirt-M7GBLqdNTjI" alt="Client" />
                <h4>Thanonchai Sriboonruang</h4>
                <p className={styles.bio}>Senior Data Scientist</p>
            </div>

            <div className={styles.testimonial_items}>
                <p>
                    "Great portfolio! Your data visualization choices are highly intuitive, and the business impact of each project is very clearly stated."
                </p>
                <img src="https://unsplash.com/photos/a-woman-in-a-pink-and-gold-dress-standing-in-front-of-a-sign-Z9NNpFtn8mw" alt="Client" />
                <h4>Mintra Sophithanon</h4>
                <p className={styles.bio}>Lead Data Analyst</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
