import { useState, useEffect } from "react";

import Navbar from "../components/NavBar";

function AdminPage() {
  const [users, setUsers] = useState<any[]>([]);

  async function getUsers() {
    const token = localStorage.getItem("token");
    const API_URL = import.meta.env.VITE_API_URL;

    const response = await fetch(`${API_URL}/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.detail || "Unable to load users");
      return;
    }

    setUsers(data.users || []);
  }

  function logoutUser() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
      return;
    }
  }, []);

  return (
    <div className="container">
      <Navbar />

      <h1>Admin Page</h1>

      <p className="admin-welcome">Welcome Administrator.</p>

      <div className="admin-buttons">
        <button onClick={getUsers}>Load Users</button>
        <button onClick={logoutUser}>Logout</button>
      </div>

      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h3>{user.username || "Unknown User"}</h3>

          <p>ID: {user.id}</p>

          <p>Role: {user.role || "User"}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminPage;