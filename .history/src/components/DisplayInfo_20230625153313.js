import React from "react";

class DisplayInfo extends React.Component {
  render() {
    console.log(this.props);
    //props: stand for Properties
    return (
      <div>
        <div>My name's {this.props.name}</div>
        <hr />
        <div>My age's {this.props.age}</div>
      </div>
    );
  }
}

export default DisplayInfo;