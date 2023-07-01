import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { listUsers } = this.props;
    //props: stand for Properties
    // console.table(listUsers);
    return (
      <div>
        {listUsers.map((user,index) => {
          if(+user.age > 18)
          {
            return (
              <div className="green">
                <div>My name's {user.name}</div>
                <div>My age's {user.age}</div>
                <hr />
              </div>
            );
          }
          else  {
            return (
              <div className="red">
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
