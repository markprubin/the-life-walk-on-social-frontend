import { useState, useEffect } from "react";
import axios from "axios";
import "./TaskList.css";

export function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [getTasks, setGetTasks] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleViewTasks = () => {
    console.log("Viewing Tasks");
    axios.get("http://localhost:3000/tasks.json").then((response) => {
      console.log(response.data);
      setTasks(response.data);
    });
  };

  const handleCreateTask = (params) => {
    axios.post(`http://localhost:3000/tasks.json`, params).then((response) => {
      console.log(response, "Creating Task.");
      setGetTasks((prev) => !prev);
    });
  };

  const handleSubmit = (task) => {
    task.preventDefault();
    const params = new FormData(task.target);
    console.log({ title: params.get("title"), status: completed });
    handleCreateTask(params);
    task.target.reset();
  };

  const handleComplete = (e) => {
    console.log(e);
    setCompleted(e.target.checked);
  };

  const finishTask = (task) => {
    console.log(task);
    const request = { ...task, status: true };
    axios.patch(`http://localhost:3000/tasks/${task.id}.json`, request).then(console.log);
  };

  const removeTask = (task) => {
    console.log(task);

    axios.delete(`http://localhost:3000/tasks/${task.id}.json`).then(handleViewTasks);
  };
  const updateTask = (task) => {
    console.log(task);
    const request = { ...task, title: true };
    axios.patch(`http://localhost:3000/tasks/${task.id}.json`).then(handleViewTasks);
  };

  useEffect(() => handleViewTasks, [getTasks]);

  return (
    <>
      <form className="AddTask" onSubmit={handleSubmit}>
        <h2 class="mx-5">Let's add a task!</h2>
        <div class="form-floating mb-3 mx-5 my-5">
          <textarea
            name="title"
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Write Your Task Here"
          />
          <label for="floatingInput">Add Task</label>

          <div id="taskcomplete" class="form-text">
            You better carry this out.
          </div>
        </div>

        <div class="mb-3 mx-5 form-check">
          <input
            name="status"
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            checked={completed}
            onChange={handleComplete}
          />
          <label class="form-check-label" for="exampleCheck1">
            Already completed?
          </label>
        </div>
        <button type="submit" class="btn btn-primary mx-5 my-3">
          Add Task
        </button>
      </form>
      <div className="TaskList">
        <h2> Task List </h2>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.status ? <h4 style={{ textDecoration: "line-through" }}>{task.title}</h4> : <h4>{task.title}</h4>}
            <h5>{task.status}</h5>
            <button onClick={() => finishTask(task)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
              </svg>
            </button>
            <button onClick={() => removeTask(task)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
              </svg>
            </button>
          </li>
        ))}
      </div>
    </>
  );
}
