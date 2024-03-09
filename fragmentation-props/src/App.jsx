import Listitem from "./Listitem";
import ErrorMessage from "./ErrorMessage";
import Container from "./Container";
import Foodinput from "./Foodinput";
import { useState } from "react";
function App() {
  let [foodItem, setFoodItem] = useState(["Roti", "Salad"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItem = [...foodItem, newFoodItem];
      setFoodItem(newItem);
    }
  };

  return (
    <>
      <Container>
        <h1 className="fw-bolder text-center">List of Healthy Food</h1>

        <ErrorMessage item={foodItem}></ErrorMessage>
        <Foodinput handleOnDown={onKeyDown}></Foodinput>

        <Listitem item={foodItem}></Listitem>
      </Container>
    </>
  );
}

export default App;
