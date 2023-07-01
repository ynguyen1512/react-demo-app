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
              <div>My name's {name}</div>
              // <div>My age's {age}</div>
              // <hr />
            </div>
          );
        })}
        //{" "}
        {/* <div>My name's {name}</div>
        // <div>My age's {age}</div>
        // <hr />
        // <div>My name's {name}</div>
        // <div>My age's {age}</div>
        // <hr />
        // <div>My name's {name}</div>
        // <div>My age's {age}</div> */}
      </div>
    );
  }
}

export default DisplayInfo;
