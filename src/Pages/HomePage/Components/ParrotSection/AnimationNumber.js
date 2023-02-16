import { useState } from 'react';

const AnimationNumber = () => {
  const [number, setNumber] = useState(0);
  if (number < 29128) {
    setTimeout(() => {
      setNumber(Math.ceil(number) + 1); // Round number up to nearest whole number
    }, 0.4);
  }

  return <span>{number}</span>;
};
export default AnimationNumber;
