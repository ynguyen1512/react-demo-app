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
        <DisplayInfo name="hoidanit" age="25" />
      </div>
    );
  }
}

export default MyComponent;
