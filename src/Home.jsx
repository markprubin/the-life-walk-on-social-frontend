import { EventsIndex } from "./EventsIndex";
import { EventsShow } from "./EventsShow";
import { Modal } from "./Modal";
import axios from "axios";
import { useState, useEffect } from "react";
import Calendar from "./components/Calendar";

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

  const handleDestroyFavorite = (favorite) => {
    console.log("handleDestroyFavorite");
    axios.delete(`http://localhost:3000/favorites/${favorite.id}.json`).then((response) => {
      setFavorites(favorites.filter((f) => f.id !== favorite.id));
      handleClose();
    });
  };

  useEffect(handleIndexEvents, []);

  return (
    <div>
      <EventsIndex
        events={events}
        onShowEvent={handleShowEvent}
        onCreateFavorite={handleCreateFavorite}
        onDestroyFavorite={handleDestroyFavorite}
      />
      <h1 className="calendar-text">Calendar</h1>
      <Calendar />
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
