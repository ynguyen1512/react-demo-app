import React from "react";

class DisplayInfo extends React.Component {
  render() {
    console.log(this.props);
    //props: stand for Properties
    return (
      <div>
        <div>My name's {this.props}</div>
        <div>My age's 21</div>
      </div>
    );
  }
}

export default DisplayInfo;
