import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const API = "http://localhost:5000/tasks";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get(API).then((res) => {
      setTasks(res.data);
    });
  };

  const addTask = () => {

    axios.post(API, {
      title: title,
      description: description,
      priority: priority
    }).then(() => {

      setTitle("");
      setDescription("");
      setPriority("");

      fetchTasks();
    });
  };

  const updateTask = (id) => {

    axios.put(`${API}/${id}`, {
      status: "Completed"
    }).then(() => {
      fetchTasks();
    });
  };

  const deleteTask = (id) => {

    axios.delete(`${API}/${id}`)
      .then(() => fetchTasks());
  };

  return (
    <div style={{ padding: "40px" }}>

      <h1>Task Manager</h1>

      <h3>Add Task</h3>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        placeholder="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <hr />

      <h2>Tasks</h2>

      {tasks.map((task) => (

        <div key={task.id} style={{border:"1px solid black",padding:"10px",margin:"10px"}}>

          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <p>Priority: {task.priority}</p>

          <p>Status: {task.status}</p>

          <button onClick={() => updateTask(task.id)}>
            Complete
          </button>

          <button onClick={() => deleteTask(task.id)}>
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default App;