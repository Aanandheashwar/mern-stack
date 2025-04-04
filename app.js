import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add Task
  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false, wrong: false }]);
      setInput(""); // Clear input field
    }
  };

  // Mark Task as Completed
  const markAsCompleted = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: true, wrong: false } : task
    );
    setTasks(updatedTasks);
  };

  // Mark Task as Wrong
  const markAsWrong = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, wrong: true, completed: false } : task
    );
    setTasks(updatedTasks);
  };

  // Delete Task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Clear All Tasks
  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div style={styles.app}>
      <h1>To-Do List</h1>

      <div style={styles.inputSection}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>Add Task</button>
        <button onClick={clearAll} style={styles.clearButton}>Clear All</button>
      </div>

      <div style={styles.taskCard}>
        <h2>Tasks</h2>
        {tasks.length === 0 ? <p>No tasks added.</p> : (
          <ul style={styles.taskList}>
            {tasks.map((task, index) => (
              <li key={index} style={{
                ...styles.taskItem,
                textDecoration: task.completed ? "line-through" : "none",
                color: task.wrong ? "red" : "black"
              }}>
                <span style={styles.taskText}>{task.text}</span>
                <div style={styles.buttonContainer}>
                  <button style={styles.completedButton} onClick={() => markAsCompleted(index)}>Completed</button>
                  <button style={styles.wrongButton} onClick={() => markAsWrong(index)}>Wrong</button>
                  <button style={styles.deleteButton} onClick={() => deleteTask(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// Inline CSS styles
const styles = {
  app: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "2rem",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  inputSection: {
    marginBottom: "1rem",
  },
  input: {
    padding: "0.5rem",
    width: "250px",
    fontSize: "1rem",
  },
  addButton: {
    padding: "0.5rem 1rem",
    marginLeft: "0.5rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  clearButton: {
    padding: "0.5rem 1rem",
    marginLeft: "0.5rem",
    backgroundColor: "gray",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "white",
  },
  taskCard: {
    backgroundColor: "white",
    padding: "2rem",
    width: "500px",
    margin: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  taskList: {
    listStyle: "none",
    padding: "0",
  },
  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderBottom: "1px solid #ddd",
  },
  taskText: {
    flex: 1,
    textAlign: "left",
    marginLeft: "10px",
  },
  buttonContainer: {
    display: "flex",
    gap: "5px",
  },
  completedButton: {
    backgroundColor: "green",
    color: "white",
    border: "none",
    padding: "0.3rem 0.6rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
  wrongButton: {
    backgroundColor: "orange",
    color: "white",
    border: "none",
    padding: "0.3rem 0.6rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "0.3rem 0.6rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
