import { useState } from 'react';

 const AnimationNumber = () => {
  const [number, setNumber] = useState(27856);
  if (number < 29128) {
    setTimeout(() => {
      setNumber(Math.ceil(number) + 1); 
    }, 4);
  }

  return <span>{number}</span>;
};
export default AnimationNumber


