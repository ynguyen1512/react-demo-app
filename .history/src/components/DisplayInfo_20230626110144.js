import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { listUsers } = this.props;
    //props: stand for Properties
    // console.table(listUsers);
    return (
      <div>
        <div>
          <span>Hide User List</span>
        </div>
      <div>
        {listUsers.map((user,index) => {
        return (
              <div className={+user.age > 18 ? "green" : "red"}>
                <div>My name's {user.name}</div>
                <div>My age's {user.age}</div>
                <hr />
              </div>
            );
        })}
     </div>

     </div>

    );
  }
}

export default DisplayInfo;
