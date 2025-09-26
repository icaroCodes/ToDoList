import { useEffect, useRef, useState } from "react"

function TaskItem({ task, toggleComplete, updateTimeSpent }) {
  const [timeLeft, setTimeLeft] = useState(task.duration * 60)
  const [isRunning, setIsRunning] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current)
            setIsRunning(false)
            return 0
          }
          updateTimeSpent(task.id, 1)
          return prev - 1
        })
      }, 1000)
    }

    return () => clearInterval(timerRef.current)
  }, [isRunning, task.id, updateTimeSpent])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <span>{task.title}</span>
        <p>Tempo gasto: {task.timeSpent}</p>
      </div>

      <div>
        <span>
          {minutes}:{seconds.toString().padStart(2, "0")}
        </span>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pausar" : "Iniciar"}
        </button>
      </div>
    </li>
  )
}

export default function TaskList({ tasks, toggleComplete, updateTimeSpent }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          updateTimeSpent={updateTimeSpent}
        />
      ))}
    </ul>
  )
}
