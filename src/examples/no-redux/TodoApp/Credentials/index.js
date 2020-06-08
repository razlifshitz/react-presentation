import React, { useState } from "react";

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

export default Credential;
