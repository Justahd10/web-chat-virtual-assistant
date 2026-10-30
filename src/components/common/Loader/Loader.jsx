import "./Loader.css";



/**
 * @typedef {import('../../../type.js').LoaderInterface} loaderOptions 
 */
const Loader = ({ type, size = "sm" }) => {
  // resolve style
  const styles = [`${type}-loader`, `${type}-loader--${size}`].join(" ")
  
  return (
    <div className={styles}></div>
  )
};

export default Loader;