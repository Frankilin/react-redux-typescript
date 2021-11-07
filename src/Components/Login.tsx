import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUsuario } from "../Redux/userSlice";

export function Login() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(changeUsuario(name));
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Nome"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
