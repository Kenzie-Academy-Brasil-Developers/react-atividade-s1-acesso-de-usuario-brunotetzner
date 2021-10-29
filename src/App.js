import "./App.css";
import { useState } from "react";
import "./components/restricted page/index";
import RestrictedPage from "./components/restricted page";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const user = "Bruno";

  function login() {
    setLoggedIn(true);
    console.log(isLoggedIn);
  }
  function logout() {
    setLoggedIn(false);
    console.log(isLoggedIn);
  }
  return (
    <div id="container">
      <RestrictedPage
        isLoggedIn={isLoggedIn}
        user={user}
        login={login}
        logout={logout}
      />
    </div>
  );
}
export default App;
