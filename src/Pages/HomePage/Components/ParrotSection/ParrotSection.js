import style from './ParrotSection.module.css';
import title from '../../Assets/headline.svg';
import AnimationNumber from './AnimationNumber';
import { motion } from 'framer-motion';

const navAnimation = {
  hidden: {
    x: -100,
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

const ParrotSection = () => {
  return (
    <div className={`${style.parrotSection} ${style.background}`}>
      <div className={style.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.2, once: true}}
          className={style.wrapper}
        >
          <section className={style.content}>
            <motion.img
              variants={navAnimation}
              custom={1}
              className={style.imgBlock}
              src={title}
              alt="title"
            ></motion.img>
            <motion.p
              variants={navAnimation}
              custom={2}
              className={style.text}
            >
              The scale of the challenges facing our planet can seem
              daunting, but we can all do something.
            </motion.p>
            <form onSubmit={null} className={style.form}>
              <input
                className={style.input}
                placeholder="Find the place to help"
              />
              <button className={style.button} type="button">
                Search
              </button>
            </form>
          </section>
          <section className={style.membersBlock}>
            <div className={style.membersSection}>
              <span className={style.members}>Members</span>
              <span className={style.number}>
                <AnimationNumber />
              </span>
            </div>
          </section>
        </motion.div>
      </div>
    </div>

  );
};
export default ParrotSection;
