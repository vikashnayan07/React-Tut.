function Todoitem1() {
  let item = "Buy Milk";
  let date = "24/02/24";
  return (
    <div class="container ">
      <div class="row vn-row">
        <div class="col-6">{item}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger vn-button vn-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem1;
