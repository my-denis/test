import React, { useState } from 'react';
import style from './GetStartedBlock.module.css';

const GetStartedBlock = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={style.getStarted}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <section className={style.content}>
            <h2 className={style.title}>Get started today!</h2>
            <p className={style.text}>
              Learn more about how you can save our planet's nature.
              From smart consumption to switching to renewable energy,
              each of us can do our part to save the planet.{' '}
            </p>
          </section>
          <section className={style.log}>
            <h2 className={style.logTitle}>Log In</h2>
            <form className={style.form} id="getStarted">
              <input
                className={style.input}
                type="text"
                name="Name"
                placeholder="Name"
                onChange={handleChange}
              />
              <input
                className={style.input}
                type="email"
                name="Email"
                placeholder="Email"
                onChange={handleChange}
              />
              <button className={style.button} type="submit">
                Book a demo
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
export default GetStartedBlock;
