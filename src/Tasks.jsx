import { useState, useEffect } from "react";
import axios from "axios";

export function Tasks() {
  const [tasks, setTasks] = useState([]);

  const handleViewTasks = () => {
    console.log("Viewing Tasks");
    axios.get("http://localhost:3000/tasks.json").then((response) => {
      console.log(response.data);
      setTasks(response.data);
    });
  };

  useEffect(handleViewTasks, []);

  return (
    <>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Task
          </label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">
            You better carry this out.
          </div>
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Already completed?
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Add Task
        </button>
      </form>
      <div>
        <h2> Task List: </h2>
        {tasks.map((task) => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <h5>{task.status}</h5>
          </div>
        ))}
      </div>
    </>
  );
}