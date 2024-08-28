import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ClubList from "./ClubList";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  const [logincount, LogCount] = useState(0);
  const [signupcount, SignCount] = useState(0);
  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <div className="card">
        <Button onClick={() => LogCount((logincount) => logincount + 1)}>
          Log In: {logincount}
        </Button>
        <Button onClick={() => SignCount((signupcount) => signupcount + 1)}>
          Sign Up: {signupcount}
        </Button>
      </div>
      <h1>Welcome to Perspective</h1>
      <p>Think Bruinwalk for clubs!</p>

      <div>
        <ClubList />
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
