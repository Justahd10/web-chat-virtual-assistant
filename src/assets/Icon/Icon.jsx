const icons = {
  expandContent: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
      <path d="M200-200v-240h80v160h160v80H200Zm480-320v-160H520v-80h240v240h-80Z"/>
    </svg>
  ),
  close: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
    </svg>
  ),
  send: () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px">
    <path d="M3,20V4l19,8L3,20Zm2-3l11.85-5L5,7v3.5L11,12L5,13.5V17Zm0,0V12V7v3.5v3V17Z"/>
  </svg>
  )
}


/**
 * @param {import('../../type.js').IconInterface} iconOptions
 */
const Icon = ({ name }) => {
  const IconComponent = icons[name];

  return <IconComponent />
}

export default Icon