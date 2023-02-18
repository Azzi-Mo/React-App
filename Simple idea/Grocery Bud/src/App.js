import React, { useState } from "react";
import Alert from "./Alert";
import List from "./List";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setisEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [aleart, setAleart] = useState({ show: false, msg: "", type: "" });
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // Please Enter Value
    } else if (name && isEditing) {
    } else {
      const newItems = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItems]);
      setName("");
    }
  };
  return (
    <section className="section-center" onSubmit={handelSubmit}>
      <form className="grocery-form">
        {aleart.show && <Alert />}
        <h3> grocery bud</h3>
        <div className="form-control">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="grocery"
            placeholder="g. eggs"
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} />
          <button className="clear-btn">clear items</button>
        </div>
      )}
    </section>
  );
}

export default App;
