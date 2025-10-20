//joshua vladimhier S. Yutuc
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTaskView({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required!");

    const task = {
      id: Date.now(),
      title,
      description,
      priority
    };

    addTask(task);
    alert(`Task "${title}" added successfully!`);
    navigate("/");
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit} className="p-3">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">Add Task</button>
      </form>
    </div>
  );
}

export default AddTaskView;
