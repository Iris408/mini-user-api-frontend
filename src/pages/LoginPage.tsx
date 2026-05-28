import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  async function loginUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      console.log("Login response:", data);
      console.log("Access token:", data.access_token);

      if (!response.ok) {
        setErrorMessage(data.detail || "Login failed");
        return;
      }

      localStorage.setItem("token", data.access_token);

      console.log("Saved token:", localStorage.getItem("token"));

      navigate("/dashboard");
    } catch (error) {
      setErrorMessage("Unable to connect to backend API");
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>

        <form onSubmit={loginUser}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default LoginPage;