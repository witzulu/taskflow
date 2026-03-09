import type { Task } from "../../types/task"

type Props = {
  task: Task
  toggleTask: (id: string) => void
  deleteTask: (id: string) => void
}

function TaskItem({ task, toggleTask, deleteTask }: Props) {
  return (
    <li className="flex justify-between items-center border-b py-2">

  <span
    onClick={() => toggleTask(task.id)}
    className={`cursor-pointer ${
      task.completed ? "line-through text-gray-400" : ""
    }`}
  >
    {task.completed ? "☑" : "☐"} {task.title}
  </span>

  <button
    onClick={() => deleteTask(task.id)}
    className="text-red-500 hover:text-red-700"
  >
    Delete
  </button>

</li>
  )
}

export default TaskItem