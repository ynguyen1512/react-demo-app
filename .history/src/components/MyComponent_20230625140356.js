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
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  // JSX: stand for JavaScript XML to use JS in HTML
  render() {
    return (
      <div>
        my name is {this.state.name} and I am from {this.state.address}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <label>Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
