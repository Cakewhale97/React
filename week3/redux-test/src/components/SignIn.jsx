import { useDispatch } from "react-redux";
import { useState } from "react";
import { signIn } from "../reducer/authSlice";

export default function SignIn() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();
    console.log(username)
    dispatch(signIn({ username, password }));
  };

  return (
    <form onSubmit={handleSignIn}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
}
