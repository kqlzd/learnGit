import React, { useState } from "react";
import { Input } from "./components/Input";
import "./App.css";

export const App = () => {
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
};
