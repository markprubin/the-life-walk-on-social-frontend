import { useState, useEffect } from "react";
import axios from "axios";

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

  useEffect(() => handleViewTasks, [getTasks]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 class="mx-5">Let's add a task!</h2>
        <div class="form-floating mb-3 mx-5 my-5">
          <input name="title" type="text" class="form-control" id="floatingInput" placeholder="Write Your Task Here" />
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
      <div class="mx-5">
        <h2> Task List: </h2>
        {tasks.map((task) => (
          <div key={task.id}>
            <h4>{task.title}</h4>
            <h5>{task.status}</h5>
          </div>
        ))}
      </div>
    </>
  );
}
