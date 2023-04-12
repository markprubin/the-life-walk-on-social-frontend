import axios from "axios";

export function EventsNew() {
  const handleCreateEvent = (params) => {
    axios.post("http://localhost:3000/events.json", params).then((response) => {
      console.log(response, "Creating an event!");
      window.location.href = "/home";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    handleCreateEvent(params);
    event.target.reset();
  };

  return (
    <div class="container text-center">
      <h1>Let's Create Connection!</h1>
      <form onSubmit={handleSubmit}>
        <div class="my-3">
          Name: <input class="form-control" name="name" type="text" />
        </div>
        <div>
          <span>
            Description of Event: <textarea name="description" class="form-control"></textarea>
          </span>
        </div>
        <div class="my-3">
          Address: <input class="form-control" name="address" type="text" />
        </div>
        <div class="my-3">
          Image URL: <input class="form-control" name="image_url" type="text" />
        </div>

        <div class="my-3">
          Start of Event: <input class="form-control" name="start_time" type="datetime-local" />
        </div>
        <div class="my-3">
          End of Event: <input class="form-control" name="end_time" type="datetime-local" />
        </div>

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}
