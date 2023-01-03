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

  const handleClose = () => {
    console.log("handleClose");
    setIsEventsShowVisible(false);
  };

  useEffect(handleIndexEvents, []);

  return (
    <div>
      <Login />
      <Signup />
      <EventsNew onCreateEvent={handleCreateEvent} />
      <EventsIndex events={events} onShowEvent={handleShowEvent} />
      <Modal show={isEventsShowVisible} onClose={handleClose}>
        <EventsShow event={currentEvent} />
      </Modal>
    </div>
  );
}
