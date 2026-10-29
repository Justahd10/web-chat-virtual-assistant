import "./Loader.css";



/**
 * @typedef {import('../../../type.js').LoaderInterface} loaderOptions 
 */
const Loader = ({ type }) => {
  // resolve style
  const style = `${type}-loader`
  
  return (
    <div className={style}></div>
  )
};

export default Loader;