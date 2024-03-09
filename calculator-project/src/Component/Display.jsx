import style from "./Display.module.css";
const Display = ({ displayVal }) => {
  return <input className={style.display} type="text" value={displayVal} />;
};
export default Display;
