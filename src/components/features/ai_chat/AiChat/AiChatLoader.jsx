// Components
import Loader from "../../../common/Loader/Loader.jsx";
// Styles
import "./AiChat.css";



const AiChatLoader = () => {
  return (
    <div className="">
      <span>Digitando</span>
      <Loader type="dots" />
    </div>
  )
};

export default AiChatLoader;