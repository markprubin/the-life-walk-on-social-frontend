export function EventsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateEvent(props.event.id, params, () => event.target.reset());
  };

  const handleClickRemove = () => {
    props.onDestroyEvent(props.event);
  };
  const admin = localStorage.getItem("admin");
  console.log(props.event);
  return (
    <div>
      <div class="container text-center pb-4">
        <h2 class="pb-4">{props.event.name}</h2>
        <img class="pb-3" src={props.event.image_url} width="300px" height="auto" />
        <h5 class="pb-3">{props.event.description}</h5>
        <h6 class="pb-3">Address: {props.event.address}</h6>
        <h6>Start: {props.event.start_time} </h6>
        <h6 class="pb-3">End: {props.event.end_time} </h6>
      </div>
      {admin === "true" ? (
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            Name: <input defaultValue={props.event.name} name="name" type="text" />
          </div>
          <div class="mb-3">
            Description: <textarea defaultValue={props.event.description} name="description" type="text" />
          </div>
          <div class="mb-3">
            Address: <input defaultValue={props.event.address} name="address" type="text" />
          </div>
          <div class="mb-3">
            Image Link: <input defaultValue={props.event.image_url} name="image_url" type="text" />
          </div>
          <div class="mb-3">
            Start of Event:
            <input defaultValue={props.event.start_time} name="start_time" id="datetime" type="datetime-local" />
          </div>
          <div class="mb-3">
            End of Event: <input defaultValue={props.event.end_time} name="end_time" type="datetime-local" />
          </div>
          <button type="submit">Update Event</button>
          <button onClick={handleClickRemove} type="submit">
            Delete Event
          </button>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
}
