import axios from "axios";
import { useState, useEffect } from "react";
import { useMemo } from "react";
import { ListItem } from "./ListItem.jsx";
import "./Favorites.css";

export function FavoritesIndex() {
  const [favorites, setFavorites] = useState([]);
  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

  const handleDestroyFavorite = (favorite) => {
    console.log(favorite);
    axios.delete(`http://localhost:3000/favorites/${favorite.table_id}.json`).then((response) => {
      setFavorites(favorites.filter((f) => f.table_id !== favorite.table_id));
    });
  };

  useEffect(handleIndexFavorites, []);

  const favoritesList = useMemo(() => {
    return favorites.map((favorite) => {
      if (favorite === null) {
        return;
      }
      const date = new Date(favorite.event.start_time);
      const formattedDate = date.toDateString("en-US");
      return (
        <ListItem
          favorite={favorite}
          title={favorite.event.name}
          date={formattedDate}
          style="favorite"
          handleDestroyFavorite={handleDestroyFavorite}
        />
      );
    });
  }, [favorites]);
  return (
    <div className="Favorites">
      <h1 className="FavHeading text-center">Your Favorited Events</h1>
      <div className="FavoritesList">{favoritesList}</div>
    </div>
  );
}
