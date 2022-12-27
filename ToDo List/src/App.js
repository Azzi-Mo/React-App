import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
function App() {
  // tasks todo list state
  const [toDo, setTodo] = useState([
    { id: 1, title: "task 1", status: true },
    { id: 2, title: "task 2", status: false },
  ]);

  // temp state
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Ddd task
  const addTask = () => {};

  // Delet task
  const DeletTask = (id) => {};

  // Mark task as done or completed
  const MarkDone = (id) => {};
  // Cancel update
  const Cancelupdate = (id) => {};
  // Change task for update
  const ChangeTask = (e) => {};
  // update task
  const updateTask = () => {};

  return (
    <div className="container App">
      <br />
      <br />
      <h2 />
      To Do List App (ReactJS) <h2 />
      <br />
      <br />

 
      {/* update Task  */}
      <div className="row">
        <div className="col">
          <input className="form-control form-control-lg"/>
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success mr-20">Update</button>
          <button className="btn btn-lg btn-warning">Cancle</button>
        </div>
      </div>

     {/* add TASK */}

     <div className="row">
        <div className="col">
          <input className="form-control-lg"/>
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success">Add Task</button>
        </div>
     </div>
       <br/>
      {/* Display ToDos */}
      {toDo && toDo.length ? "" : "No Tasks..."}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="tasktext">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <span title='Completed / Not Completed'>
                     
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <span title='Edit'>
                    
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span title='Delet'>
                  =
                      <FontAwesomeIcon icon={faAddressBook} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
}

export default App;
