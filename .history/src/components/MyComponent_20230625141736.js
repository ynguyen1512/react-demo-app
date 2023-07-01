import React from "react";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {
  state = {
    name: "Jason",
    address: "Tan Binh",
    age: 21,
  };

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
        my name is {this.state.name} and I am {this.state.age}
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
        <UserInfo></UserInfo>
      </div>
    );
  }
}

export default MyComponent;
