# ToDoList

O **ToDoList** é um app feito em **React** que ajuda você a organizar suas tarefas, marcar o que já fez, acompanhar quanto tempo gastou em cada tarefa e ainda ver estatísticas da sua lista.

---

## 🚀 Tecnologias e Hooks usados

- **React.js** – Construção da interface.
- **useState** – Para controlar estados como:
  - Lista de tarefas (`tasks`)
  - Inputs do formulário (`title` e `duration`)
  - Timer de cada tarefa (`timeLeft` e `isRunning`)
- **useEffect** – Controla o timer de cada tarefa.
- **useRef** – Guarda a referência do `setInterval` para parar o timer quando precisar.
- **useMemo** – Calcula estatísticas de forma otimizada (total de tarefas, concluídas e tempo médio).

---

## ⚙️ Funcionalidades

### Adicionar tarefas
- Digite o título da tarefa e defina a duração em minutos.
- Cada tarefa tem `id`, `title`, `duration`, `completed` e `timeSpent`.

### Marcar como concluída/pendente
- O checkbox alterna o estado `completed` da tarefa.

### Timer de cada tarefa
- Cada tarefa tem seu próprio timer.
- **Iniciar/Pausar**: Clica no botão para iniciar ou pausar.
- **Tempo gasto**: A cada segundo, o `timeSpent` é atualizado.
- **Acabou o tempo**: O timer para automaticamente ao chegar em 0.

### Estatísticas
- Total de tarefas
- Tarefas concluídas
- Tempo médio gasto por tarefa

---

## ⏱ Como funciona o timer

1. Começa com `timeLeft = duration * 60` segundos.
2. Clicou em **Iniciar** → `isRunning = true` e o timer começa.
3. Cada segundo aumenta `timeSpent`.
4. Quando chega em 0:
   - Para o timer (`clearInterval`)
   - `isRunning = false`
5. O botão alterna entre **Iniciar** e **Pausar** conforme o estado.




# Realizei o commit em outro computador que estava configurado com credenciais diferentes, por isso ele aparece como feito por outro usuário, mas na verdade foi feito inteiramente por mim.
