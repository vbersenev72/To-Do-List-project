import { useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Head/Header";
import TaskList from "./components/TaskList/TaskList";




function App() {

  const [todo, setTodo] = useState([]);

  return (
    <div className="App">

      <Header />
      <AddTask todo={todo} setTodo={setTodo} />
      <TaskList todo={todo} setTodo={setTodo} />

    </div>
  );
}

export default App;
