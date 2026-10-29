// Components
import Icon from "../../../assets/Icon/Icon.jsx";



/**
 * @param {import("../../../type.js").ButtonInterface} buttonOptios
 */
const ButtonRoot = ({
  children, 
  type = "button",
  onClick,
  disabled = false
}) => {
  return (
    <button className="" type={type} onClick={onClick}
    disabled={disabled}>
      {children}
    </button>
  )
};

const ButtonLabel = ({ label }) => {
  return (
    <span className="">
      {label}
    </span>
  )
};

const ButtonIcon = ({ iconName }) => {
  return <Icon name={iconName}/>
};


const Button = {
  'Root': ButtonRoot,
  'Label': ButtonLabel,
  'Icon': ButtonIcon
};

export default Button