import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{ fontFamily: "Consolas", fontSize: "18px" }}>
            <div className="container">
            <Link className="navbar-brand" to="/">Task Manager</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/add">Add Task</Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>

        {/* Placeholder content */}
        <div className="container mt-4">
            <h2>Welcome to Task Manager</h2>
            <p>This is the base setup with Bootstrap and routing placeholders.</p>
        </div>
        </Router>
    );
}

export default App;
