import React, { useState, useEffect } from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import products from '../example.json'

const mock = new MockAdapter(axios);

mock.onGet("/users").reply(200, products);

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios.get("/users").then((response) => {
      setUsers(response.data.users);
    });
  }, []);

  const handleEditClick = (id) => {
    const user = users.find((u) => u.id === id);
    setFormData(user);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUsers = users.map((user) =>
        user.id === formData.id ? formData : user
    );
    setUsers(updatedUsers);
    setFormData({});
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1>Edit Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={() => handleEditClick(user.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {formData.id && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            required
          />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
}

export default App;
