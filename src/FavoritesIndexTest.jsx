import React from "react";
import { useState } from "react";

export function FavoritesIndexTest() {
  const [user, setUser] = useState([]);
  const handleIndexUsers = () => {
    console.log("handleIndexUsers");
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  };

  return <div>TEST</div>;
}
