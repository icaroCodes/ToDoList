import { useMemo, useState } from 'react'
import TaskForm from './components/TaskForm'
import Stats from './components/Stats'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (title, duration) => {
    const newTask = {
      id: Date.now(),
      title,
      duration,
      completed: false,
      timeSpent: 0
    }
    setTasks([...tasks, newTask])
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const updateTimeSpent = (id, seconds) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, timeSpent: task.timeSpent + seconds } : task
    ))
  }

  const stats = useMemo(() => {
    const total = tasks.length
    const completed = tasks.filter((t) => t.completed).length
    const avgTime =
      tasks.length > 0
        ? (tasks.reduce((acc, t) => acc + t.timeSpent, 0) / tasks.length).toFixed()
        : 0

    return { total, completed, avgTime }
  }, [tasks])

  return (
    <>
      <h1>To do list</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        updateTimeSpent={updateTimeSpent}
      />
      <Stats stats={stats} />
    </>
  )
}

export default App
