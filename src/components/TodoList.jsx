
import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask(e) {
    e.preventDefault();

    if (task.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  const remainingTasks = tasks.filter(
    (item) => !item.completed
  ).length;

  return (
    <div className="card">
      <h2>To-Do List</h2>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>

      <p>Remaining Tasks: {remainingTasks}</p>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            <span
              onClick={() => toggleTask(item.id)}
              className={item.completed ? "completed" : ""}
            >
              {item.text}
            </span>

            <button onClick={() => deleteTask(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
