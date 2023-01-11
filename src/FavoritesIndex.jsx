import axios from "axios";
import { useState, useEffect } from "react";

export function FavoritesIndex() {
  const [favorites, setFavorites] = useState([]);
  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

  useEffect(handleIndexFavorites, []);

  return (
    <div>
      <h1>Your Favorites</h1>
      {favorites.map((favorite) => (
        <div key={favorite.id}>
          <h2>{favorite.id}</h2>
        </div>
      ))}
    </div>
  );
}
