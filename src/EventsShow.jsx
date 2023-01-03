export function EventsShow(props) {
  return (
    <div>
      <h1>Event information</h1>
      <h2>{props.name}</h2>
      <p>Description: {props.description}</p>
      <p>Address: {props.address}</p>
      <img src={props.image_url} />
      <p>Start: {props.start_time} </p>
      <p>End: {props.end_time} </p>
    </div>
  );
}
