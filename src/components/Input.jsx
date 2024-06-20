import React, { useState } from "react";

export const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

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
  const person = {};
  const person2 = {
    name: ["kenan", "ramal"],
    age: "32",
    bio: function () {
      console.log(`${this.name} is ${this.age} old`);
    },
  };
  const person3 = {
    name: ["kenan", "ramal"],
    age: "32",
    bio: function () {
      console.log(`${this.name} is ${this.age} old`);
    },
  };
  console.log(person2.age);
  console.log(person2.name);
  console.log(person2.bio());

  console.log(person3.age);
  console.log(person3.name);
  console.log(person3.bio());

  // FUNCTIONS;
  const addSum = (a, b) => a + b;
  console.log(addSum(4, 6));

  function reverse_a_number(n) {
    // Convert the input number to a string
    n = n + "";

    // Split the string into an array of characters, reverse the array, and then join the characters back into a string
    return n.split("").reverse().join("");
  }

  // Convert the reversed string back to a number and log it to the console
  console.log(Number(reverse_a_number(32243)));

  return (
    <>
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
    </>
  );
};
