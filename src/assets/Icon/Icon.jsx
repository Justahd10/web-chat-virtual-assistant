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