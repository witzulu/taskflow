type TaskCardProps = {
  title: string
}

function TaskCard({ title }: TaskCardProps) {
  return (
    <div>
      <p>{title}</p>
    </div>
  )
}

export default TaskCard