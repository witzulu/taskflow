import TaskCard from "./TaskCard"

function TaskBoard() {
  return (
    <div>
      <h2>Task Board</h2>

      <TaskCard title="Fix login bug" />
      <TaskCard title="Build API connection" />
      <TaskCard title="Deploy server" />
    </div>
  )
}

export default TaskBoard