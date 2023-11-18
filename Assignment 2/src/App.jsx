import { useState } from "react";
import SignIn from "./Instagram Auth/SignIn/SignIn";
import SignUp from "./Instagram Auth/SignUp/SignUp";
import InstaLogo from "./assets/logo.png";
import CounterApp from "./counterApp";

function App() {
  const [project, setProject] = useState(true);
  const [loadSignIn, setLoadSignIn] = useState(true);
  function changeForm() {
    setLoadSignIn(!loadSignIn);
  }
  return (
    <>
      {project ? (
        <div>
          <img
            src={InstaLogo}
            alt="instagram-logo"
            width="200px"
            height="100px"
          />
          {loadSignIn ? (
            <SignIn onClick={changeForm} />
          ) : (
            <SignUp onClick={changeForm} />
          )}
          <button className="spe-btn" onClick={() => setProject(!project)}>
            go to counter App
          </button>
        </div>
      ) : (
        <div>
          <CounterApp />
          <button className="spe-btn" onClick={() => setProject(!project)}>
            go to Instagram App
          </button>
        </div>
      )}
    </>
  );
}

export default App;
