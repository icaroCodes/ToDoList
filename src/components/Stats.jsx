export default function Stats({ stats }) {
  return (
    <div>
      <h2>Estatísticas</h2>
      <p>Total de tarefas: {stats.total}</p>
      <p>Concluídas: {stats.completed}</p>
      <p>Tempo médio gasto: {stats.avgTime}</p>
    </div>
  )
}
