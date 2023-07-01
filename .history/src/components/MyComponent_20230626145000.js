import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      {
        id: 1,
        name: "HoiDanIT",
        age: 16,
      },
      {
        id: 2,
        name: "Jason",
        age: 69,
      },
      {
        id: 3,
        name: "Greenwich",
        age: 13,
      },
    ],
  };
  handleAddNewUser = ()=> {
    alert("Mee")
  }

  // JSX: stand for JavaScript XML to use JS in HTML
  render() {
    return (
      <div>
        <AddUserInfo />
        <br />
        <br />
        <DisplayInfo 
        listUsers={this.state.listUsers} 
        handleAddNewUser={this.handleAddNewUser}
        />
      </div>
    );
  }
}

export default MyComponent;
