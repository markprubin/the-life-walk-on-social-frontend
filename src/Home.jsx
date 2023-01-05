import { EventsIndex } from "./EventsIndex";
import { EventsNew } from "./EventsNew";
import { EventsShow } from "./EventsShow";
import { Modal } from "./Modal";
import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Home() {
  const [events, setEvents] = useState([]);
  const [isEventsShowVisible, setIsEventsShowVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({});
  const [favorites, setFavorites] = useState([]);

  const handleIndexEvents = () => {
    console.log("handleIndexEvents");
    axios.get("http://localhost:3000/events.json").then((response) => {
      console.log(response.data);
      setEvents(response.data);
    });
  };

  const handleCreateEvent = (params, successCallback) => {
    console.log("handleCreateEvent", params);
    axios.post("http://localhost:3000/events.json", params).then((response) => {
      setEvents([...events, response.data]);
      successCallback();
    });
  };

  const handleShowEvent = (event) => {
    console.log("handleShowEvent", event);
    setIsEventsShowVisible(true);
    setCurrentEvent(event);
  };

  const handleUpdateEvent = (id, params, successCallback) => {
    console.log("handleUpdateEvent", params);
    axios.patch(`http://localhost:3000/events/${id}.json`, params).then((response) => {
      setEvents(
        events.map((event) => {
          if (event.id === response.data.id) {
            return response.data;
          } else {
            return event;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsEventsShowVisible(false);
  };

  const handleDestroyEvent = (event) => {
    console.log("handleDestroyEvent", event);
    axios.delete(`http://localhost:3000/events/${event.id}.json`).then((response) => {
      setEvents(events.filter((p) => p.id !== event.id));
      handleClose();
    });
  };

  const handleCreateFavorite = (params, successCallback) => {
    console.log("handleCreateFavorite", params);
    const eventsfavorite = { event_id: params.id };
    axios.post("http://localhost:3000/favorites.json", eventsfavorite).then((response) => {
      setFavorites([...favorites, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexEvents, []);

  return (
    <div>
      <EventsIndex events={events} onShowEvent={handleShowEvent} />
      <Modal show={isEventsShowVisible} onClose={handleClose}>
        <EventsShow
          event={currentEvent}
          onUpdateEvent={handleUpdateEvent}
          onDestroyEvent={handleDestroyEvent}
          onCreateFavorite={handleCreateFavorite}
        />
      </Modal>
    </div>
  );
}
