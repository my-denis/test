import style from './TeamBlock.module.css';

const AnimatedDotted = ({className}) => {
    return (
        <span className={className}>
        <svg
          width="310"
          height="180"
          viewBox="0 0 394 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          className={style.path}
            opacity="0.6"
            d="M1.08628 33.4823C17.6222 13.7838 112.165 -4.86829 162.661 2.47673C213.157 9.82175 226.284 56.133 217.814 66.9871C213.791 74.4202 200.36 77.6858 194.516 70.5584C186.446 60.7165 191.716 51.9398 198.766 44.2917C208.742 33.4699 281.926 37.3118 325.73 62.4603C372.75 89.4546 409.066 133.764 386.251 178.944"
            stroke="black"
            strokeDasharray="4"
          />
        </svg>
      </span>
    )
}
export default AnimatedDotted