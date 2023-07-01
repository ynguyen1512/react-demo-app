import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       {
//         id: 1,
//         name: "HoiDanIT",
//         age: 16,
//       },
//       {
//         id: 2,
//         name: "Jason",
//         age: 69,
//       },
//       {
//         id: 3,
//         name: "Greenwich",
//         age: 13,
//       },
//     ],
//   };
//   handleAddNewUser = (userObj)=> {
//     console.log("check data from parents", userObj)
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     })
//   }
//   handleDeleteUser =(userId) =>{
//     let listUsersClone = [...this.state.listUsers]
//     listUsersClone = listUsersClone.filter((item)=> item.id !== userId)
//     this.setState({
//       listUsers : listUsersClone
//     })
//   }

//   // JSX: stand for JavaScript XML to use JS in HTML
//   render() {
//     const test = {name: 'Jason', age: 21}
//     return (
//       <>
//       {JSON.stringify(test)}
//       <br/>
//         <div className="a">
//         <AddUserInfo 
//         handleAddNewUser={this.handleAddNewUser}
//         />
//         <br />
//         <br />
//         <DisplayInfo 
//         listUsers={this.state.listUsers} 
//         handleDeleteUser={this.handleDeleteUser}
//         />
//       </div>
//       <div className="b">

//       </div>
//       </>
//     );
//   }
// }

const MyComponent = (props)=> {
  const [listUsers, setListUsers] = useState(
    [
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
    ]
  );
  
  const handleAddNewUser = (userObj)=> {
    setListUsers([userObj, ...listUsers])
    
  }
  const handleDeleteUser = (userId) =>{
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item)=> item.id !== userId)
    setListUsers(listUsersClone)
  }
  return (
    <>
       <br/>
         <div className="a">
         <AddUserInfo 
         handleAddNewUser={handleAddNewUser}
         />
         <br />
         <br />
         <DisplayInfo 
         listUsers={listUsers} 
         handleDeleteUser={handleDeleteUser}
         />
       </div>
       <div className="b">

       </div>
       </>
  )
} 

export default MyComponent;
