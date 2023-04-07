import axios from "axios";
import { useState, useEffect } from "react";
import { useMemo } from "react";
import { ListItem } from "./ListItem.jsx";

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
    console.log("handleDestroyFavorite");
    axios.delete(`http://localhost:3000/favorites/${favorite.id}.json`).then((response) => {
      setFavorites(favorites.filter((f) => f.id !== favorite.id));
      handleClose();
    });
  };

  useEffect(handleIndexFavorites, []);

  const favoritesList = useMemo(() => {
    return favorites.map((favorite) => {
      if (favorite === null) {
        return;
      }
      return (
        // <div key={favorite.id}>
        //   <h2>{favorite.name}</h2>
        // </div>
        <ListItem
          favorite={favorite}
          title={favorite.name}
          style="favorite"
          handleDestroyFavorite={handleDestroyFavorite}
        />
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
