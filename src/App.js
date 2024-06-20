import "./App.css";
import { Input } from "./components/Input";
import React, { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="App">
      <Input taskList={taskList} setTaskList={setTaskList} />
      {taskList.map((item) => {
        return (
          <ul>
            <li>{item}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
