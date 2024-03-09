import style from "./App.module.css";
import Display from "./Component/Display";
import ButtonsContainer from "./Component/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calval, setDisplay] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setDisplay("");
    } else if (buttonText === "=") {
      const res = eval(calval);
      setDisplay(res);
    } else {
      const newDisplayVal = calval + buttonText;
      setDisplay(newDisplayVal);
    }
  };
  return (
    <>
      <div className={style.calculator}>
        <Display displayVal={calval}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
