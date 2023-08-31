import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setIsAuthenticated } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_API_URL}/login`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    const fetchResponse = await fetch(url, requestOptions);
    if (fetchResponse.status === 200) {
      let data = await fetchResponse.json();
      setToken(data.token);
      setIsAuthenticated(true);
      navigate("/");
    } else {
      alert("Invalid Credential");
    }
  };

  return (
    <>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <p>
          <label>Email </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label>Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>

        <p>
          <input type="submit" value="Login" />
        </p>
      </form>
    </>
  );
};

export default Login;
