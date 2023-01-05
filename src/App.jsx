import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Favorites } from "./Favorites";
import { EventsNew } from "./EventsNew";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/newevent" element={<EventsNew />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
