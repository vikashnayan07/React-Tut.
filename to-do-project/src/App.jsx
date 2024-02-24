import Todoapp from "./component/Todoapp";
import Additem from "./component/Additem";
import Todoitem1 from "./Todoitem1";
import Todoitem2 from "./Todoitem2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <Todoapp></Todoapp>
      <Additem></Additem>
      <div className="item-container">
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
