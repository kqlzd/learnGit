import React, { useState } from "react";
import { Input } from "./components/Input";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <Input taskList={taskList} setTaskList={setTaskList} />
      {taskList.map((item) => {
        return (
          <ul>
            <li>{item}</li>
          </ul>
        );
      })}
    </>
  );
}
