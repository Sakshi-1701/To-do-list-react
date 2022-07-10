import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState(" ");
  const [items, setItems] = useState([]);

  function handleClick(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleClick} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
