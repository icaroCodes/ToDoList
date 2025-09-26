import { useState } from "react"

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("")
  const [duration, setDuration] = useState(50)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    addTask(title, duration)
    setTitle("")
    setDuration(50)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite a tarefa..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
      />

      <button type="submit">Adicionar</button>
    </form>
  )
}
