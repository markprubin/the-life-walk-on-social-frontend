import { EventsIndex } from "./EventsIndex";
import { EventsShow } from "./EventsShow";
import { Modal } from "./Modal";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Home() {
  const [events, setEvents] = useState([]);
  const [isEventsShowVisible, setIsEventsShowVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  const location = useLocation();
  console.log(location);

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
      handleIndexEvents();
    });
  };
  // ADD FAVORITE
  const handleCreateFavorite = (params) => {
    console.log("handleCreateFavorite", params);
    const eventsfavorite = { event_id: params.id };
    axios
      .post("http://localhost:3000/favorites.json", eventsfavorite)
      .then((response) => {
        setFavorites([...favorites, response.data]);
        handleIndexEvents();
        axios.get("http://localhost:3000/users.json").then((response) => {
          setFavoritesList(response.data.favorites?.map((favorite) => favorite.event_id));
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => handleIndexEvents, []);

  useEffect(() => {
    axios.get("http://localhost:3000/users.json").then((response) => {
      setFavoritesList(response.data.favorites?.map((favorite) => favorite.event_id));
    });
  }, []);

  return (
    <div>
      <EventsIndex
        events={events}
        onShowEvent={handleShowEvent}
        onCreateFavorite={handleCreateFavorite}
        favoritesList={favoritesList}
      />
      <Modal show={isEventsShowVisible} onClose={handleClose}>
        <EventsShow event={currentEvent} onUpdateEvent={handleUpdateEvent} onDestroyEvent={handleDestroyEvent} />
      </Modal>
    </div>
  );
}
