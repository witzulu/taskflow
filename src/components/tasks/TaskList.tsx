import type { Task } from "../../types/task"
import TaskItem from "./TaskItem"

type Props = {
  tasks: Task[]
  toggleTask: (id: string) => void
  deleteTask: (id: string) => void
}

function TaskList({ tasks, toggleTask, deleteTask }: Props) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  )
}

export default TaskList