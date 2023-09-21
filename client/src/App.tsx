import Home from "./views/Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import About from "./views/About/About";
import { Navbar } from "./componentes/Navbar/Navbar";
import Task from "./views/Task/Task";
import { FormLogin } from "./views/Formlogin/FormLogin";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="./App.css">
        {location.pathname !== "/" && <Navbar />}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tarea" element={<Task />} />
          <Route path="/login" element={<FormLogin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
