import { useEffect, useState } from "react";
import axios from "axios";

export function UsersIndex() {
  const [users, setUsers] = useState({});

  const handleIndexUsers = () => {
    axios.get("http://localhost:3000/users.json").then((response) => {
      setUsers(response.data);
    });
  };

  useEffect(handleIndexUsers, []);

  const handleUpdateUser = (id, params) => {
    axios.patch(`http://localhost:3000/users/${id}.json`, params).then((response) => {
      setUsers(response.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleUpdateUser(users.id, params);
  };

  return (
    <div class="card container" width="200px">
      <div key={users?.id}>
        <img src={users?.image_url} class="card-img-top w-25 p-5" alt="..." />
        <div class="card-body">
          <h5 class="card-title">
            {users?.first_name} {users?.last_name}
          </h5>
          <h4>Bio:</h4>
          <p class="card-text">{users?.bio}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            First Name: <input defaultValue={users?.first_name} name="first_name" type="text" />
          </div>
          <div>
            Last Name: <input defaultValue={users?.last_name} name="last_name" type="text" />
          </div>
          <div>
            Profile Picture: <input defaultValue={users?.image_url} name="image_url" type="text" />
          </div>
          <div>
            E-Mail: <input defaultValue={users?.email} name="email" type="text" />
          </div>
          <div>
            Phone Number: <input defaultValue={users?.phone} name="phone" type="text" />
          </div>
          <div>
            Birth Date: <input defaultValue={users?.birth_date} name="birth_date]" type="date" />
          </div>
          <div>
            Address: <input defaultValue={users?.home_address} name="home_address" type="text" />
          </div>
          <div>
            Bio: <input defaultValue={users?.bio} name="bio" type="text" />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
