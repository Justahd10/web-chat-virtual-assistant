// Components
import Button from "../../../common/Button/Button.jsx";
// Contexts
import { AiChatContext } from "../contexts/AiChatContext.jsx";
// Hooks
import { useContext } from "react";
// Form state
import { useForm } from "react-hook-form";
// styles
import "./AiChat.css";



const AiChatInput = () => {
  // Chat messages context
  const { appendUsrMessage } = useContext(AiChatContext);

  // Form state
  const {
    register,
    handleSubmit,
    formState: { isLoading }
  } = useForm();

  // Submit function
  const onSubmit = (data) => {
    if (!isLoading) {
      // clean text area content


      // call provider method
      appendUsrMessage
    }
  };

  return (
    <form className="ai-chat-input"
      onSubmit={handleSubmit(onSubmit)}>
      <label>
        <textarea
          {...register("usrMessage")}>
        </textarea>
      </label>

      <Button.Root type="submit" disabled={!isLoading}>
        <Button.Icon iconName="" />
      </Button.Root>
    </form>
  )
};

export default AiChatInput