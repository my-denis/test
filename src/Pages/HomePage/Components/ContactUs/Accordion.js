import { useState } from 'react';
import style from './ContactUs.module.css';
import data from './DataAccordion.json';
import plus from '../../Assets/plus.svg';
import minus from '../../Assets/minus.svg';
import { motion } from 'framer-motion';

const Accordion = () => {
  const [accordion, setAccordion] = useState([0]);

  const toggle = (index) => {
    const newAccordions = [...accordion];
    const isAccordionOpen = !accordion.includes(index);
    if (isAccordionOpen) {
      newAccordions.push(index);
    } else {
      let idx = newAccordions.indexOf(index);
      newAccordions.splice(idx, 1);
    }
    setAccordion(newAccordions);
  };

  const contactAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.3,
      },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
    >
      {data.map((item, index) => {
        return (
          <motion.div
            variants={contactAnimation}
            custom={1}
            className={style.accordion}
            key={index}
            onClick={() => toggle(index)}
          >
            <div className={style.accordionHead}>
              <h2 className={style.accordionTitle}>
                {item.question}
              </h2>
              <img
                className={style.accordionButton}
                src={accordion.includes(index) ? minus : plus}
                alt=""
              ></img>
            </div>
            <p
              className={
                accordion.includes(index)
                  ? style.accordionShow
                  : style.accordionHiden
              }
            >
              {item.answer}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Accordion;
