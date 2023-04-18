import { useState, useEffect } from "react";
import axios from "axios";
import "./TaskList.css";
import { ListItem } from "./ListItem.jsx";

export function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [getTasks, setGetTasks] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [selectedTask, setSelectedTask] = useState();

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
    axios.patch(`http://localhost:3000/tasks/${task.id}.json`, request).then(handleViewTasks);
  };

  const removeTask = (task) => {
    console.log(task);
    axios.delete(`http://localhost:3000/tasks/${task.id}.json`).then(handleViewTasks);
  };

  const updateTask = (id, params) => {
    console.log(id);
    axios.patch(`http://localhost:3000/tasks/${id}.json`, params).then((response) => {
      handleViewTasks();
    });
  };

  const handleUpdate = (form, task) => {
    console.log(form, task);
    form.preventDefault();
    const params = new FormData(form.target);
    updateTask(task.id, params);
    handleViewTasks();
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
          <label class="row mx-1 form-check-label" for="exampleCheck1">
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
          <ListItem
            task={task}
            title={task.title}
            status={task.status}
            finishTask={finishTask}
            removeTask={removeTask}
            setSelectedTask={setSelectedTask}
          />
        ))}
      </div>
      {/* Edit Task Modal */}
      <div class="modal fade" id="taskEditModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit Task{" "}
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form onSubmit={(x) => handleUpdate(x, selectedTask)}>
                <h6>
                  <input defaultValue={selectedTask?.title} name="title" type="text"></input>
                </h6>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                    Update Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
