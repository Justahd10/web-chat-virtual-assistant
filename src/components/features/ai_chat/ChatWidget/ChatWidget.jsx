// Components
import Button from "../../../common/Button/Button.jsx";
import Image from "../../../../assets/Image/Image.jsx";
// Contexts
import { AiChatVisibilityContext } from "../contexts/AiChatVisibilityContext.jsx";
// Hooks
import { useContext } from "react";
// Styles
import "./ChatWidget.css";



/**
 * @param {import('../../../../type.js').WidgetRootInterface} children
 */
const ChatWidgetRoot = ({ children }) => {
  return (
    <div className="chat-widget">{children}</div>
  )
};

const ChatWidgetButton = () => {
  // Chat visibility context
  const { dispatch } = useContext(AiChatVisibilityContext);

  return (
    <Button.Root onClick={() => dispatch("visible")}>
      <Image name="virtualAssistent"/>
    </Button.Root>
  )
};

/**
 * @param {import('../../../../type.js').WidgetLabelInterface} labelOptions
 */
const ChatWidgetLabel = ({ label }) => {
  return (
    <span>{label}</span>
  )
};

const ChatWidget = {
  'Root': ChatWidgetRoot,
  'Button': ChatWidgetButton,
  'Label': ChatWidgetLabel
};

export default ChatWidget