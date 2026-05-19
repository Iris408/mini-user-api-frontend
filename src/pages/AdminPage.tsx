import { useEffect, useState } from "react";
import Navbar from "../components/NavBar";

function AdminPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function checkAdmin() {
      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/";
        return;
      }

      const response = await fetch("http://127.0.0.1:8002/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 403) {
        window.location.href = "/dashboard";
        return;
      }

      const data = await response.json();
      setMessage(data.message);
    }

    checkAdmin();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <h1>Admin Page</h1>
      <p>{message}</p>
    </div>
  );
}

export default AdminPage;