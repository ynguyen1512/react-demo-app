import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { listUsers } = this.props;
    //props: stand for Properties
    // console.table(listUsers);
    return (
      <div>
        {listUsers.map((user,index) => {
          console.log("check user" +user)
          if(+user.age > 18)
          {
            return (
              <div key={user.id}>
                <div>My name's {user.name}</div>
                <div>My age's {user.age}</div>
                <hr />
              </div>
            );
          }
          
        })}
     </div>
    );
  }
}

export default DisplayInfo;
