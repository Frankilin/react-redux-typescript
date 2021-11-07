import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";

export function User() {
  const user = useSelector(selectUser);

  return (
    <div>
      <h1>Usuário: {user.name}</h1>
    </div>
  );
}
