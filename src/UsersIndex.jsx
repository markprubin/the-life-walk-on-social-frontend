import { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

export function UsersIndex() {
  const [users, setUsers] = useState([]);

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

  const profileForm = (
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
        Bio: <textarea defaultValue={users?.bio} name="bio" type="text" />
      </div>
      <button type="submit" class="Savebutton btn btn-primary" data-bs-dismiss="modal">
        Save changes
      </button>
    </form>
  );

  return (
    <div width="200px">
      <div className="Profile" key={users?.id}>
        <img src={users?.image_url} class="card-img-top w-25 p-5" alt="..." />
        <div class="card-body">
          <h3 class="card-title pb-3">
            {users?.first_name} {users?.last_name}
          </h3>
          <h5 class="card-title pb-3">{users?.email}</h5>
          <h4>Bio:</h4>
          <p class="card-text pb-5">{users?.bio}</p>
        </div>

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#profileModal">
          Edit Profile
        </button>

        {/* Edit User Modal */}
        <div class="modal fade" id="profileModal" tabindex="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="profileModalLabel">
                  Edit Profile
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">{profileForm}</div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
