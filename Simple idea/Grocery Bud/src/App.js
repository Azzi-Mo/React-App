import React, { useState } from "react";
import Alert from "./Alert";
function App() {
  const [name, setName] = useState("");
  const [aleart, setAleart] = useState({ show: true, msg: "", type: "" });
  const [isEditing, setEditing] = useState(true);
  const handelSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <section className="section-center" onSubmit={handelSubmit}>
      <form className="grocery-form">
        {aleart.show && <Alert />}
        <h3> grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="g. eggs" />
          <button
            type="submit"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="submit-btn"
          >
            {isEditing ? "edite" : "submit"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
