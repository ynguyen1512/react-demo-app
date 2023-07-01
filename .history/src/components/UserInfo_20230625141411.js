import React from "react";

class UserInfo extends React.Component {
  render() {
    return (
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
    );
  }
}
