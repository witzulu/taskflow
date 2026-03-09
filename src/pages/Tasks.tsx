import { useState, useEffect } from "react"

import TaskInput from "../components/tasks/TaskInput"
import TaskList from "../components/tasks/TaskList"

import type { Task } from "../types/task"


function Tasks() {

const [tasks, setTasks] = useState<Task[]>(() => {
  const storedTasks = localStorage.getItem("tasks")

  if (!storedTasks) return []

  return JSON.parse(storedTasks)
})
  const [taskInput, setTaskInput] = useState("")

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}, [tasks])
  function addTask() {
  if (taskInput.trim() === "") return

  const newTask: Task = {
    id: crypto.randomUUID(),
    title: taskInput,
    completed: false,
    createdAt: new Date()
  }

  setTasks([...tasks, newTask])
  setTaskInput("")
}
function toggleTask(id: string) {
  setTasks(
    tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  )
}

function deleteTask(id: string) {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">
        Tasks
      </h1>

      <TaskInput
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        addTask={addTask}
      />

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />

    </div>
  )
}

export default Tasks