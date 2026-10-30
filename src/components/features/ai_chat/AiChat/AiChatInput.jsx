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



/**
 * @param {import('../../../../type.js').AiChatInputInterface} inputOptions
 */
const AiChatInput = ({ placeholder }) => {
  // Chat messages context
  const { appendUsrMessage } = useContext(AiChatContext);

  // Form state
  const {
    reset,
    register,
    handleSubmit,
    formState: { isLoading }
  } = useForm();

  // Submit function
  const onSubmit = (data) => {
    if (!isLoading) {
      // clean text area content
      reset();

      // call provider method
      appendUsrMessage({
        'type': "usr",
        'content': data.usrMessage
      })
    }
  };

  return (
    <form className="ai-chat-input"
      onSubmit={handleSubmit(onSubmit)}>
      <label>
        <textarea placeholder={placeholder}
          {...register("usrMessage")}>
        </textarea>
      </label>

      <Button.Root type="submit" 
      disabled={isLoading}>
        <Button.Icon iconName="send" />
      </Button.Root>
    </form>
  )
};

export default AiChatInput