import Accordion from './Accordion';
import style from './ContactUs.module.css';
import { motion } from 'framer-motion';

const contactAnimation = {
  hidden: {
    x: 0,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.3,
    },
  }),
};

const ContactUs = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.4, once: true }}
    className={style.contactUs}
  >
    <div className={style.container}>
      <motion.section
        variants={contactAnimation}
        custom={2}
        className={style.mainText}
      >
        <h2 className={style.title}>Ready to Get started?</h2>
        <p className={style.text}>
          When pattern is mentioned in interior design, it is easy to
          asso- ciate it with a geometric patterned wallpaper or
          colourful prints on interior fabrics.
        </p>
        <button className={style.button}>Contact us</button>
      </motion.section>
      <Accordion />
    </div>
  </motion.div>
);

export default ContactUs;
