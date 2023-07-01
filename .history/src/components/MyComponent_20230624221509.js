import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Jason",
    address: "Tan Binh",
    age: 21,
  };

  handleClick() {
    console.log("123");
  }

  // JSX: stand for JavaScript XML to use JS in HTML
  render() {
    return (
      <div>
        my name is {this.state.name} and I am from {this.state.address}
        <button onClick={handleClick}>Click Me</button>
      </div>
    );
  }
}

export default MyComponent;
