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
import { FavoritesIndexTest } from "./FavoritesIndexTest";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<FavoritesIndex />} />
        <Route path="/newevent" element={<EventsNew />} />
        <Route path="/profile" element={<UsersIndex />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/favoritestest" element={<FavoritesIndexTest />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
