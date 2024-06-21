import React, { useState } from "react";

export const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [dark, setDark] = useState(false);

  const handleChange = (value) => {
    setInput(value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([input, ...taskList]);
    setInput("");
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      const allItems = [1, 2, 3];
      setSelectedItems(allItems);
    }
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  // OBJECTS
  var student = {
    name: "david",
    sclass: "6",
    rollNo: "12",
  };
  console.log("student ---- ", student.name, student.rollNo, student.sclass);
  delete student.rollNo;
  console.log("student2 ---- ", student.name, student.rollNo, student.sclass);
  console.log(student.length);

  var library = [
    {
      title: "Bill Gates",
      author: "The Road Ahead",
      readingStatus: true,
    },
    {
      title: "Steve Jobs",
      author: "Walter Isaacson",
      readingStatus: true,
    },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      readingStatus: false,
    },
  ];
  console.log("lib", library);
  for (let i = 0; i < library.length; i++) {
    var book = "'" + library[i].author + "by" + library[i].title;
    console.log(book);
  }

  // FUNCTIONS;
  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "black" : "yellow",
      }}
    >
      <form>
        <input
          type="text"
          placeholder="todo"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button onClick={handleAddTask}>add</button>
        <button type="submit">submit</button> <br /> <br />
        <button>click</button>
        <button>click2</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onClick={handleSelectAll}
              />
            </th>
            <th>Item</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onClick={handleSelectAll}
              />
            </th>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((id) => (
            <tr key={id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(id)}
                  onChange={() => handleSelectItem(id)}
                />
              </td>
              <td>Item {id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setDark(true)}>Dark Mode</button>
      <button onClick={() => setDark(false)}>Light Mode</button>
    </div>
  );
};
