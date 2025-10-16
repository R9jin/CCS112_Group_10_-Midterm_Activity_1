import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTaskView from "./AddTaskView";
import TaskListView from "./TaskListView";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);
  const removeTask = (id) => setTasks(tasks.filter(task => task.id !== id));
  
  //a

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <Link className="navbar-brand" to="/">Task Manager</Link>
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Task List</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/add">Add Task</Link></li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<TaskListView tasks={tasks} removeTask={removeTask} />} />
          <Route path="/add" element={<AddTaskView addTask={addTask} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
