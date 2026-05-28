import { useState } from "react";

function LoginPage() {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  async function loginUser() {

    const formData = new FormData();

    formData.append("username", username);

    formData.append("password", password);

    const API_URL = import.meta.env.VITE_API_URL;

    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

    const data = await response.json();

    if (data.access_token) {

      localStorage.setItem(
        "token",
        data.access_token
      );

      window.location.href = "/dashboard";

    } else {

      setMessage("Login failed");
    }
  }

  async function registerUser() {

    const response = await fetch(
      "http://127.0.0.1:8002/register",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );

    const data = await response.json();

    setMessage(
      data.message || "User registered"
    );
  }

  return (

    <div className="login-container">

      <h1>Login Page</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={loginUser}>
        Login
      </button>

      <br />
      <br />

      <button onClick={registerUser}>
        Register
      </button>

      <p>{message}</p>

    </div>
  );
}

export default LoginPage;