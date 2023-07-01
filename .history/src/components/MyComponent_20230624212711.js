import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Jason",
    address: "Tan Binh",
    age: 21,
  };

  // JSX: stand for JavaScript XML to use JS in HTML
  render() {
    return (
      <div>
        my name is {this.state.name} and I am from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
