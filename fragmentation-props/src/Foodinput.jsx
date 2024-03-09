import styles from "./Foodinput.module.css";
function Foodinput({ handleOnDown }) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter the food input"
        className={styles.FoodInput}
        onKeyDown={handleOnDown}
      />
    </>
  );
}
export default Foodinput;
