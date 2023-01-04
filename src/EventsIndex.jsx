export function EventsIndex(props) {
  return (
    <div>
      <h1>All Events</h1>
      <div class="container text-center">
        <div class="row">
          {props.events.map((event) => (
            <div key={event.id} class="card col-4">
              <img src={event.image_url} class="card-img-top" object-fit="cover" />
              <div class="card-body">
                <h5 class="card-title">{event.name}</h5>
                <p class="card-text">{event.description}</p>
                <button className="btn btn-info" onClick={() => props.onShowEvent(event)}>
                  Event Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
