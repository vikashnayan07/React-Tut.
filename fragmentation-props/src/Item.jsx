import styles from "./Item.module.css";
const Item = ({ foodItem, bought, handleOnChange }) => {
  return (
    <>
      <li
        className={`${styles["vn-color"]} list-group-item ${
          bought && "active"
        }`}
      >
        {foodItem}
        <button
          className={`${styles.button} btn btn-info`}
          onClick={handleOnChange}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
