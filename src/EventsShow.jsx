export function EventsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateEvent(props.event.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyEvent(props.event);
  };

  return (
    <div>
      <h1>Event information</h1>
      <h2>{props.event.name}</h2>
      <p>Description: {props.event.description}</p>
      <p>Address: {props.event.address}</p>
      <img src={props.event.image_url} />
      <p>Start: {props.event.start_time} </p>
      <p>End: {props.event.end_time} </p>

      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.event.name} name="name" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.event.description} name="description" type="text" />
        </div>
        <div>
          Address: <input defaultValue={props.event.address} name="address" type="text" />
        </div>
        <div>
          Image Link: <input defaultValue={props.event.image_url} name="image_url" type="text" />
        </div>
        <div>
          Start of Event: <input defaultValue={props.event.start_time} name="start_time" type="datetime" />
        </div>
        <div>
          End of Event: <input defaultValue={props.event.end_time} name="end_time" type="datetime" />
        </div>
        <button type="submit">Update Event</button>
        <button onClick={handleClick} type="submit">
          Delete Event
        </button>
      </form>
    </div>
  );
}
