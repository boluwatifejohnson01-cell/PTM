import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./element/Navbar";
import Homepage from "./Pages/Homepage";
import Taskpage from "./Pages/Taskpage";
import TaskNew from "./Pages/TaskNew";
import EditTask from "./Pages/EditTask";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/task" element={<Taskpage />} />
          <Route path="/nuutask" element={<TaskNew />} />
          <Route path="/edittask" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
