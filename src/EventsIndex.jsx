import React, { useRef } from "react";

import "./App.css";

export function EventsIndex(props) {
  // Scroll to Events
  const ref = useRef(null);
  const doClick = () => ref.current?.scrollIntoView({ behavior: "smooth" });
  return (
    // Top Feature
    <div>
      <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
        <div class="row justify-content-between">
          <div class="col-md-4">
            <h1 class="display-4 fst">Welcome to The Life Walk-On Social</h1>
            <p class="lead my-3">
              Please browse the current events below. If you haven't already, we would love for you to sign up and add
              some of the events to your favorites list to attend in the future.
            </p>
          </div>

          <div class="col-4 p-4">
            <img
              class="row img-thumbnail p-8"
              src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
          </div>
        </div>
      </div>
      {/* Features */}
      <div class="container px-4 py-5">
        <h2 class="pb-2 border-bottom">What is The Life Walk-On Social?</h2>

        <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div class="col d-flex flex-column align-items-start gap-2">
            <h3 class="fw-bold">A community of former athletes helping each other make it in a post-athletic life.</h3>
            <p class="text-muted">
              We want to bring together former athletes and create a community based on shared experiences from our
              athletic past and use them to transition into a post-athletic life
            </p>
            <button onClick={doClick} class="btn btn-primary btn-lg container">
              Browse Events
            </button>
          </div>

          <div class="col">
            <div class="row row-cols-1 row-cols-sm-2 g-4">
              <div class="col d-flex flex-column gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-calendar2-event"
                    viewBox="0 0 16 16 "
                  >
                    <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                  </svg>
                </div>

                <h4 class="fw-semibold mb-0">Events</h4>
                <p class="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-list-task"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                    />
                    <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                    <path
                      fill-rule="evenodd"
                      d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                    />
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0">Task list</h4>
                <p class="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0">Profiles</h4>
                <p class="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div>
          <h3 class="fw-bold">What are we looking to add in the future?</h3>
          <p class="text-muted mx-6 py-2">
            We want to bring together former athletes and create a community based on shared experiences from our
            athletic past and use them to transition into a post-athletic life
          </p>
          <ul>
            <h4 class="pb-2">Community Forum</h4>
            <h4 class="pb-2">Chat and Connect</h4>
            <h4 class="pb-2">Comments in Events</h4>
          </ul>
        </div>
      </div>
      <hr class="solid py-1" />

      {/* All events */}
      <h1 ref={ref} className="text-center pb-5">
        Future Events
      </h1>
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
                {localStorage.jwt === undefined ? (
                  <></>
                ) : (
                  <button
                    className="btn btn-warning"
                    onClick={() => props.onCreateFavorite(event)}
                    disabled={props.favoritesList.find((favorite) => favorite === event.id)}
                    type="submit"
                  >
                    Add to Favorites
                  </button>
                )}
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
