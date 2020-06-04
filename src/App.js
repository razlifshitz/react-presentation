import React, { useState } from "react";
import PropsDemo from "./PropsDemo";
import TodoHook from "./TodoWithHooks";

function App() {
  const [user, setUser] = useState("");

  function handleSignIn(value) {
    setUser(value);
  }

  function handleSignOut() {
    setUser("");
  }

  return (
    <>
      <div className="ui secondary pointing menu">
        <div className="item">
          <h1>Todo App</h1>
        </div>
        <Credential
          user={user}
          handleSignIn={handleSignIn}
          handleSignOut={handleSignOut}
        ></Credential>
      </div>
      <TodoHook user={user}></TodoHook>
    </>
  );
}

function Credential({ user, handleSignIn, handleSignOut }) {
  const [userField, setUserField] = useState("");

  function onSignIt() {
    handleSignIn(userField);
    setUserField("");
  }

  function getSignOutJsx() {
    return (
      <>
        <div className="item">
          <h3>Hello, {user}</h3>
        </div>
        <div className="item">
          <button className="ui red mini button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </>
    );
  }

  function getSignInJsx() {
    return (
      <>
        <div className="item ">
          <div className="ui input">
            <input
              onChange={(e) => setUserField(e.target.value)}
              value={userField}
            />
          </div>
        </div>
        <div className="item">
          <button className="ui blue mini button" onClick={onSignIt}>
            Sign In
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="right menu">{!user ? getSignInJsx() : getSignOutJsx()}</div>
  );
}

export default App;
