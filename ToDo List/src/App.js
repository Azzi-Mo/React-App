import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrachCan,
} from '@fortawesome/free-solid-svg-icons';
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
      <br/><br/>
      <h2/>To Do List App (ReactJS) <h2/>
      <br/><br/>

      {/* Display ToDos */}

      {toDo && toDo.length ? '' : 'No Tasks...'}
      {toDo && toDo 
      .map((task , index) => {
        return (
          <React.Fragment>
          
          <div className="col taskBg">

             <div className={task.status ? 'done': ''}>

             <span className="taskNumber">{index+1}</span>
             <span className="tasktext">{task.title}</span>

             </div>
             <div className="iconsWrap">
              <span>
                <FontAwesomeIcon icon={faCircleCheck}/>
              </span>
              <span>
              <FontAwesomeIcon icon={faPen}/>

              </span>
              <span>
              <FontAwesomeIcon icon={faTrachCan}/>

              </span>

             </div>

          </div>
          </React.Fragment>
        )
      })}

    </div>

  )
}

export default App;
