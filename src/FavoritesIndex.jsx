import axios from "axios";
import { useState, useEffect } from "react";
import { useMemo } from "react";

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

  const favoritesList = useMemo(() => {
    return favorites.map((favorite) => {
      if (favorite === null) {
        return;
      }
      return (
        <div key={favorite.id}>
          <h2>{favorite.name}</h2>
        </div>
      );
    });
  }, [favorites]);
  return (
    <div>
      <h1>Your Favorited Events</h1>
      {favoritesList}
    </div>
  );
}
