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
  handleOnChangeInput = (event) => {
    alert("Click me pls");
  };

  // JSX: stand for JavaScript XML to use JS in HTML
  render() {
    return (
      <div>
        my name is {this.state.name} and I am from {this.state.address}
        <form>
          <input type="text" onChange={() => this.handleOnChangeInput(event)} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
