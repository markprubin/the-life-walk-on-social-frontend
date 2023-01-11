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
    <div>
      <h1>New Event</h1>
      <form onSubmit={handleSubmit}>
        <div class="input-group mb-3">
          Name: <input name="name" type="text" />
        </div>
        <div class="input-group mb-3">
          <span>
            Description of Event: <textarea name="description" class="form-control"></textarea>
          </span>
        </div>
        <div class="input-group mb-3">
          Address: <input name="address" type="text" />
        </div>
        <div class="input-group mb-3">
          Image URL: <input name="image_url" type="text" />
        </div>

        <div class="input-group mb-3">
          Start of Event: <input name="start_time" type="datetime-local" />
        </div>
        <div class="input-group mb-3">
          End of Event: <input name="end_time" type="datetime-local" />
        </div>

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}
