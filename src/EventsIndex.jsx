export function EventsIndex(props) {
  return (
    <div>
      <h1>All Events</h1>
      {props.events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>Description: {event.description}</p>
          <p>Address: {event.address}</p>
          <img src={event.image_url} />
          <p>Start: {event.start_time} </p>
          <p>End: {event.end_time} </p>
          <button onClick={() => props.onShowEvent(event)}>Event Info</button>
        </div>
      ))}
    </div>
  );
}
