import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { age, name } = this.props;
    //props: stand for Properties
    return (
      <div>
        <div>My name's {name}</div>
        <div>My age's {age}</div>
        <hr />
      </div>
    );
  }
}

export default DisplayInfo;
