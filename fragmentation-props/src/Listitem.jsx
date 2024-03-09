import { useState } from "react";
import Item from "./Item";

function Listitem({ item }) {
  // let foodItem = [];

  let [activeItem, setactiveItem] = useState([]);
  const onActive = (item, event) => {
    let newItem = [...activeItem, item];
    setactiveItem(newItem);
  };

  return (
    <>
      <ul className="list-group">
        {item.map((item) => (
          <Item
            key={item}
            foodItem={item}
            bought={activeItem.includes(item)}
            handleOnChange={(event) => {
              onActive(item, event);
            }}
          ></Item>
        ))}
      </ul>
    </>
  );
}
export default Listitem;
