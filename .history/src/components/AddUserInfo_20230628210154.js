import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//   state = {
//     name: "Jason",
//     address: "Tan Binh",
//     age: 21,
//   };

//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id : Math.floor((Math.random()*100)+1) + 'random',
//       name: this.state.name,
//       age: this.state.age
//     })
//   };

//   render() {
//     return (
//       <div>
//         my name is {this.state.name} and I am {this.state.age}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your name: </label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChangeInput(event)}
//           />
//           <label>Your age: </label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfo = (props)=> {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState('')

  handleOnChangeInput = (event) => {
    setUserInfo(name: event.target.value)
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
        this.props.handleAddNewUser({
          id : Math.floor((Math.random()*100)+1) + 'random',
          name: this.state.name,
          age: this.state.age
        })
      };

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
          </div>
        );


}

export default AddUserInfo;
