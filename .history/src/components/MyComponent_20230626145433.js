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
  handleAddNewUser = (userObject)=> {
    alert("Mee")
  }

  // JSX: stand for JavaScript XML to use JS in HTML
  render() {
    return (
      <div>
        <AddUserInfo 
        handleAddNewUser={this.handleAddNewUser}

        />
        <br />
        <br />
        <DisplayInfo 
        listUsers={this.state.listUsers} 
        />
      </div>
    );
  }
}

export default MyComponent;
