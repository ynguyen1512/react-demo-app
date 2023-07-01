import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { listUsers } = this.props;
    //props: stand for Properties
    console.log(listUsers);
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div>
              <div>My name's {user.name}</div>
              <div>My age's {user.age}</div>
              <hr />
            </div>
          );
        })}
        //{" "}
      </div>
    );
  }
}

export default DisplayInfo;
