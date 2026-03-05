import Navbar from "../components/layout/Navbar"
import TaskBoard from "../features/tasks/TaskBoard"

function App() {
  return (
    <div>
      <Navbar />

      <h1>Dashboard</h1>

      <TaskBoard />
    </div>
  )
}

export default App