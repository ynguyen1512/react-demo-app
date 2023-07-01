import React from "react";
import UserInfo from "./UserInfo";
import DisplayIfo from "./DisplayInfo";

class MyComponent extends React.Component {
  // JSX: stand for JavaScript XML to use JS in HTML
  render() {
    return (
      <div>
        <UserInfo></UserInfo>
        <DisplayInfo />
      </div>
    );
  }
}

export default MyComponent;
