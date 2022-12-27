import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faAddressBook,
  faTasksAlt,
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
    setUpdateData('')
  };


  // Change task for update
  const ChangeTask = (e) => {
      
    let newEntry = {
      id:updateData.id,
      title:e.target.value,
      status:updateData.status ? true :false
    }
    setUpdateData(newEntry)

  };



  // update task
  const updateTask = () => {

     let filterRecords  = [...toDo].filter( task => task.id !== updateData.id);
     let updatedObject = [...filterRecords , updateData]
     setTodo(updatedObject);
     setUpdateData('')

  };

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
          <input 
          
          value={updateData && updateData.title}
          onChange={(e) => ChangeTask(e)}
          className="form-control form-control-lg" />
        </div>
        <div className="col-auto">
          <button 
          onClick={updateTask}
          className="btn btn-lg btn-success mr-20">Update</button>
          <button className="btn btn-lg btn-warning">Cancle</button>
        </div>
      </div>



      {/* add TASK */}
      <div className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn btn-lg btn-success">
            Add Task
          </button>
        </div>
      </div>
      <br />
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
                    <span
                      title="Completed / Not Completed"
                      onClick={(e) => MarkDone(task.id)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>


                  {task.status ? null : (
                    <span title="Edit"
                    onClick={() => setUpdateData({
                    id:task.id,
                    title : task.title,
                    status :task.status ? true :false})}
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>

                  )}

                    <span title="Delet" onClick={() => DeletTask(task.id)}>
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
