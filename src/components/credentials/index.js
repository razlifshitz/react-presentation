import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actionsCreators";

function Credentials({ user, signIn, signOut }) {
  const [userField, setUserField] = useState("");

  function onSignIt() {
    signIn(userField);

    setUserField("");
  }

  function getSignOutJsx() {
    return (
      <>
        <div className="item">
          <h3>Hello, {user}</h3>
        </div>
        <div className="item">
          <button className="ui red mini button" onClick={signOut}>
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

function mapStateToProps(state) {
  return {
    user: state.activeUserReducer,
  };
}

export default connect(mapStateToProps, { signIn, signOut })(Credentials);
