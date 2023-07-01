import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Jason",
    address: "Tan Binh",
    age: 21,
  };

  handleClick(e) {
    console.log("Click me pls");
    this.setState({
      name: "Erik",
      age: Math.floor(Math.random() * 100 + 1),
    });
  }

  // JSX: stand for JavaScript XML to use JS in HTML
  render() {
    return (
      <div>
        my name is {this.state.name} and I am from {this.state.address}
        <button onClick={this.handleClick(e)}>Click Me</button>
      </div>
    );
  }
}

export default MyComponent;
