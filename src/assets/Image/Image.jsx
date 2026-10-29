// Images
import AiAssistentImg from "./images/virtual-assistent.png"; 



const images = {
  'virtualAssistent': () => <img src={AiAssistentImg}/>
};

/**
 * @param {import('../../type').ImageInterface} imageOptions
 */
const Image = ({ name }) => {
  const ImageComponent = images[name];

  return <ImageComponent />
};

export default Image