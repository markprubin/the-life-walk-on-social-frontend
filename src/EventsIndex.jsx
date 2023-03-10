import React, { useState, useEffect } from "react";
import axios from "axios";

export function EventsIndex(props) {
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users.json").then((response) => {
      setFavoritesList(response.data.favorites?.map((favorite) => favorite.event_id));
    });
  }, []);

  return (
    <div>
      <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
        <div class="col-5 p-4 float-end">
          <img
            class="row img-thumbnail p-8"
            src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          />
        </div>
        <div class="col-md-2 px-4">
          <h1 class="display-4 fst">Welcome to The Life Walk-On Social</h1>
          <p class="lead my-3">
            Please browse the current events below. If you haven't already, we would love for you to sign up and add
            some of the events to your favorites list to attend in the future.
          </p>
        </div>
      </div>
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
                <button
                  className="btn btn-warning"
                  onClick={() => props.onCreateFavorite(event)}
                  disabled={favoritesList.find((favorite) => favorite === event.id)}
                  type="submit"
                >
                  Add to Favorites
                </button>
                <br />
                <h5>Favorites: {event.favorites}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
