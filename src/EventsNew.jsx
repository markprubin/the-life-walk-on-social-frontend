export function EventsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateEvent(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Address: <input name="address" type="text" />
        </div>
        <div>
          Image URL: <input name="image_url" type="text" />
        </div>
        <div>
          Start (DD-MM-YYYY): <input name="start_time" type="text" />
        </div>
        <div>
          End (DD-MM-YYYY): <input name="end_time" type="text" />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}
