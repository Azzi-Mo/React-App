import "./App.css";
import Dashboard from "./Componenet/Dashboard.jsx";
import NavBar from "./Componenet/Nav.jsx";
import AddForm from "./Componenet/AddForm";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
      <Route path="/" element={ <> <Dashboard /> </>  } />

        <Route path="AddForm" element={ <> <AddForm /> </>  } />
      </Routes>
    </>
  );
}

export default App;
