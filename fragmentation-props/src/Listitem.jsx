import Item from "./Item";
function Listitem({ item }) {
  // let foodItem = [];

  return (
    <>
      <ul className="list-group">
        {item.map((item) => (
          <Item key={item} foodItem={item}></Item>
        ))}
      </ul>
    </>
  );
}
export default Listitem;
