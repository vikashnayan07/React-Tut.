import Listitem from "./Listitem";
import ErrorMessage from "./ErrorMessage";
function App() {
  let foodItem = [
    "Sabji",
    "Dal",
    " Ghee",
    "Milk",
    "Green Vegitable",
    "Salad",
    "Roti",
  ];
  return (
    <>
      <h1 className="fw-bolder">List of Healthy Food</h1>

      <ErrorMessage item={foodItem}></ErrorMessage>
      <Listitem item={foodItem}></Listitem>
    </>
  );
}

export default App;
