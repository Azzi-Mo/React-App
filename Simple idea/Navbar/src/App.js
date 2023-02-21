import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import List from "./List";

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if(list){

    return JSON.parse(localStorage.getItem('list'))
  }
  else {
   return []
  }
}

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setisEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  // start handel submit function
  console.log(list);
  const handelSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      // Please Enter Value
      // setAlert({ show: true, msg: "Please Enter Value", type: "danger" })
      showAlert(true, "Please Enter Value", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item , title: name };
          }
          return item;
        })
      );
      setName('');
      editID(null);
      isEditing(false);
      showAlert(true, "Value Changed", "success");
    } else {
      showAlert(true, "item add to the list", "success");
      const newItems = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItems]);
      setName("");
    }
  };

  // end handel submit function

  // start handeling alert

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  // end handeling alert

  // start handeling clear list
  const clearList = () => {
    showAlert(true, "clear list ", "danger");
    setList([]);
  };

  // end handeling clear list

  // start editeing items

  const editingItem = (id) => {
    const cpesifcItem = list.find((item) => item.id === id);
    setisEditing(true);
    setEditID(id);
    setName(cpesifcItem.title);
  };

  // end editeing items

  // start removeing items

  const removeItem = (id) => {
    showAlert(true, "clear item ", "danger");
    const newItem = list.filter((item) => item.id !== id);
    setList(newItem);
  };

  // end removeing items

  useEffect(()=> {
    localStorage.setItem('list',JSON.stringify(list))
  },[list])
  return (
    <section className="section-center"
             onSubmit={handelSubmit}>

      <form className="grocery-form">

          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
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
          <List
            items={list}
            removeItem={removeItem}
            editingItem={editingItem}
          />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}

    </section>
  );
}

export default App;
