import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">

      <h2 className="text-xl font-bold mb-6">
        TaskFlow
      </h2>

      <nav className="flex flex-col gap-3">

        <Link
          to="/"
          className="hover:bg-gray-700 p-2 rounded"
        >
          Dashboard
        </Link>

        <Link
          to="/tasks"
          className="hover:bg-gray-700 p-2 rounded"
        >
          Tasks
        </Link>

        <Link
          to="/settings"
          className="hover:bg-gray-700 p-2 rounded"
        >
          Settings
        </Link>

      </nav>
    </div>
  )
}