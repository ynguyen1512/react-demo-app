import React from "react";

class MyComponent extends React.Component {
  // JSX: stand for JavaScript XML to use JS in HTML
  render() {
    return (
      <div>
        my first component
        {Math.random()}
      </div>
    );
  }
}

export default MyComponent;
