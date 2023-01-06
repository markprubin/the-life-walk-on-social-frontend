import { useState } from "react";

export function EventsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateEvent(props.event.id, params, () => event.target.reset());
  };

  const handleClickFavorite = () => {
    props.onCreateFavorite(props.event);
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
      <img src={props.event.image_url} width="300px" height="auto" />
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
          Start of Event: <input defaultValue={props.event.start_time} name="start_time" type="datetime-local" />
        </div>
        <div>
          End of Event: <input defaultValue={props.event.end_time} name="end_time" type="datetime-local" />
        </div>
        <button type="submit">Update Event</button>
        <button onClick={handleClick} type="submit">
          Delete Event
        </button>
      </form>
      <button onClick={handleClickFavorite} type="submit">
        Add to Favorites
      </button>
    </div>
  );
}
