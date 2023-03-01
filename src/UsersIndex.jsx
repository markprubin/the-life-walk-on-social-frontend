import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function UsersIndex() {
  const [users, setUsers] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Display User Profile

  const handleIndexUsers = () => {
    console.log("handleIndexUsers");
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  useEffect(handleIndexUsers, []);

  // Update User Profile
  const handleUpdateUser = (id, params) => {
    console.log("hi");
    axios.patch(`http://localhost:3000/users/${id}.json`, params).then((response) => {
      setUsers(response);
      handleClose();
    });
  };

  const handleSubmit = (user) => {
    user.preventDefault();
    console.log("hi");
    const params = new FormData(user.target);
    console.log(params);
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
        <Button variant="primary" onClick={handleShow}>
          Edit Profile
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div>
              First Name: <input defaultValue={users?.first_name} name="first_name" type="text" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
