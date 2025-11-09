
import styles from "./button.module.css";

const Button = ({isOutline, icon, text}) => {
 
  return (
    <button className={isOutline ? styles.outline_button : styles.button}>
      {icon}
      {text}
    </button>
  )
}

export default Button;