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
  handleAddNewUser = (userObj)=> {
    console.log("check data from parents", userObj)
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    })
  }
  handleDeleteUser =(userId) =>{
    let listUsersClone = [...this.state.listUsers]
    listUsersClone = listUsersClone.filter((item)=> item.id !== userId)
    this.setState({
      listUsers : listUsersClone
    })
  }

  // JSX: stand for JavaScript XML to use JS in HTML
  render() {
    const test = {name: 'Jason', age: 21}
    return (
      <>
      {JSON.stringify(test)}
      <br/>
        <div className="a">
        <AddUserInfo 
        handleAddNewUser={this.handleAddNewUser}
        />
        <br />
        <br />
        <DisplayInfo 
        listUsers={this.state.listUsers} 
        handleDeleteUser
        />
      </div>
      <div className="b">

      </div>
      </>
    );
  }
}

export default MyComponent;
