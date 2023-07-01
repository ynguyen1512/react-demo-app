import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      {
        id: 1,
        name: "HoiDanIT",
        age: 21,
      },
      {
        id: 2,
        name: "HoiDanIT",
        age: 21,
      },
      {
        id: 3,
        name: "HoiDanIT",
        age: 21,
      },
    ],
  };
  // JSX: stand for JavaScript XML to use JS in HTML
  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo name="hoidanit" age="25" />
        <DisplayInfo name="hoidanit" age="25" />
      </div>
    );
  }
}

export default MyComponent;
