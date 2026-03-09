type Props = {
  taskInput: string
  setTaskInput: (value: string) => void
  addTask: () => void
}

function TaskInput({ taskInput, setTaskInput, addTask }: Props) {
  return (
  <div className="flex gap-2 mb-6">

    <input
      type="text"
      placeholder="Enter task..."
      value={taskInput}
      onChange={(e) => setTaskInput(e.target.value)}
      className="flex-1 border rounded px-3 py-2"
    />

    <button
      onClick={addTask}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add
    </button>

  </div>
)
}

export default TaskInput