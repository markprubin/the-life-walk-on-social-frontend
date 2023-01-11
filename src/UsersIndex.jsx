import { useEffect, useState } from "react";
import axios from "axios";

export function UsersIndex() {
  const [users, setUsers] = useState([]);

  const handleIndexUsers = () => {
    console.log("handleIndexUsers");
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  useEffect(handleIndexUsers, []);

  return (
    <div class="card container" width="200px">
      {users.map((user) => (
        <div key={user.id}>
          <img src={user.image_url} class="card-img-top w-25 p-5" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              {user.first_name} {user.last_name}
            </h5>
            <p class="card-text">{user.bio}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}
