import style from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonsNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={style.buttonContainers}>
      {buttonsNames.map((item) => (
        <button className={style.button} onClick={() => onButtonClick(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
