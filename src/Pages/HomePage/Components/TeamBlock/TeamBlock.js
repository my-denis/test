import team1 from '../../Assets/team-first.png';
import team2 from '../../Assets/team-second.png';
import team3 from '../../Assets/team-third.png';
import AnimatedDotted from './AnimatedDotted';
import style from './TeamBlock.module.css';
import { motion } from 'framer-motion';

const teamAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y:0,
    opacity: 1,
    transition: {
      delay: custom * 0.3,
    },
  }),
};

const TeamBlock = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.5, once: true }}
    className={style.TeamBlock}
  >
    <motion.div
      variants={teamAnimation}
      custom={1}
      className={style.container}
    >
      <section className={style.header}>
        <h2 className={style.title}>Our top team</h2>
        <p className={style.text}>
          Learn more about how you can save our planet's nature.{' '}
        </p>
      </section>
      <section className={style.imagesContainer}>
        <p className={style.team1}>
          <img src={team1} alt="team" />
        </p>
        <p className={style.team2}>
          <img src={team2} alt="team" />
        </p>
        <p className={style.team3}>
          <img src={team3} alt="team" />
        </p>
        <AnimatedDotted className={style.dotted1} />
        <AnimatedDotted className={style.dotted2} />
      </section>
    </motion.div>
  </motion.div>
);

export default TeamBlock;
