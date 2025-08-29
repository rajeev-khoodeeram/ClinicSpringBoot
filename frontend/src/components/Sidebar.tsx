import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Admin Panel</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/doctors">Doctors</Link>
          </li>
          <li>
            <Link to="/patients">Patients</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
