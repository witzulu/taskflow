import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>
        Dashboard
      </Link>

      <Link to="/tasks" style={{ color: "white", marginRight: "15px" }}>
        Tasks
      </Link>

      <Link to="/settings" style={{ color: "white" }}>
        Settings
      </Link>
    </nav>
  )
}

export default Navbar