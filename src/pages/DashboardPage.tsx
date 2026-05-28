import { useState, useEffect } from "react";

import Navbar from "../components/NavBar";

function DashboardPage() {
  const [profile, setProfile] = useState<any>(null);

  async function getProfile() {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
      return;
    }

    const API_URL = import.meta.env.VITE_API_URL;

    const response = await fetch(`${API_URL}/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      localStorage.removeItem("token");
      window.location.href = "/";
      return;
    }

    const data = await response.json();

    setProfile(data.user);
  }

  function logoutUser() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="container">
      <Navbar />

      <h1>Dashboard</h1>

      {profile && (
        <div className="info-card">
          <h2>User Information</h2>

          <p>Username: {profile.username}</p>
          <p>Role: {profile.role || "User"}</p>
          <p>User ID: {profile.id}</p>

          <button onClick={logoutUser}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default DashboardPage;