import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  // JSX: stand for JavaScript XML to use JS in HTML
  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo />
      </div>
    );
  }
}

export default MyComponent;
