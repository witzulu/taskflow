import { useState } from "react"
import Navbar from "../components/layout/Navbar"

function App() {
  const [taskCount, setTaskCount] = useState(0)

  return (
    <div>
      <Navbar />

      <h1>Dashboard</h1>

      <p>Total Tasks: {taskCount}</p>

      <button onClick={() => setTaskCount(taskCount + 1)}>
        Add Task
      </button>
    </div>
  )
}

export default App