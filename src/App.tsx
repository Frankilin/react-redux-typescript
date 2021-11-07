import { Login } from "./Components/Login";
import { Logout } from "./Components/Logout";
import { User } from "./Components/User";

function App() {
  return (
    <div className="App">
      <Login />
      <br />

      <User />
      <br />
      <hr />

      <Logout />
    </div>
  );
}

export default App;
