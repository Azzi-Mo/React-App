import React, { useState } from "react";

import AddTaskForm from "./Component/AddTaskForm.jsx";
import UpdateForm from "./Component/UpdateForm.jsx";
import ToDo from "./Component/Todo.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
function App() {
  // tasks todo list state
  const [toDo, setTodo] = useState([
  ]);

  // temp state
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Ddd task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, statsu: false };
      setTodo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // Delet task
  const DeletTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    setTodo(newTask);
  };

  // Mark task as done or completed
  const MarkDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTodo(newTask);
  };

  // Cancel update
  const Cancelupdate = (id) => {
    setUpdateData("");
  };

  // Change task for update
  const ChangeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  // update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setTodo(updatedObject);
    setUpdateData("");
  };

  return (
    <div className="container App">
      <br />
      <br />
      <h2>To Do List App (ReactJS) </h2>
      <br />
      <br />
      {/* update Task  */}
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          updateTask={updateTask}
          ChangeTask={ChangeTask}
          Cancelupdate={Cancelupdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}
      {/* Display ToDos */}
      {toDo && toDo.length ? "" : "No Tasks..."}
      <ToDo
        toDo={toDo}
        MarkDone={MarkDone}
        setUpdateData={setUpdateData}
        DeletTask={DeletTask}
      />
    </div>
  );
}

export default App;
