import { NavLink } from "react-router-dom"
import { LayoutDashboard, CheckSquare, Settings } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">

      <h2 className="text-xl font-bold mb-8">
        TaskFlow
      </h2>

      <nav className="flex flex-col gap-2">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded ${
              isActive ? "bg-gray-700" : "hover:bg-gray-800"
            }`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded ${
              isActive ? "bg-gray-700" : "hover:bg-gray-800"
            }`
          }
        >
          <CheckSquare size={18} />
          Tasks
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded ${
              isActive ? "bg-gray-700" : "hover:bg-gray-800"
            }`
          }
        >
          <Settings size={18} />
          Settings
        </NavLink>

      </nav>

    </div>
  )
}