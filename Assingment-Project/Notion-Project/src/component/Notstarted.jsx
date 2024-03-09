import style from "./Notstarted.module.css";
function Notstarted() {
  return (
    <>
      <div class={`${style.border} container text-center`}>
        <div class={`${style.rows} row vn-row`}>
          <div class="col-6">
            <p className={style.not}> Not Progress</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Notstarted;
