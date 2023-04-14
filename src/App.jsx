import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { FavoritesIndex } from "./FavoritesIndex";
import { EventsNew } from "./EventsNew";
import { Welcome } from "./Welcome";
import { UsersIndex } from "./UsersIndex";
import { Tasks } from "./Tasks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/Home"
            element={
              <>
                <Header /> <Home />
              </>
            }
          />
          <Route path="/" element={<Welcome />} />
          <Route
            path="/about"
            element={
              <>
                <Header /> <About />
              </>
            }
          />
          <Route
            path="/favorites"
            element={
              <>
                <Header /> <FavoritesIndex />
              </>
            }
          />
          <Route
            path="/newevent"
            element={
              <>
                <Header /> <EventsNew />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header /> <UsersIndex />
              </>
            }
          />
          <Route
            path="/tasks"
            element={
              <>
                <Header /> <Tasks />
              </>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
