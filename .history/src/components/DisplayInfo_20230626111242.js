import React from "react";

class DisplayInfo extends React.Component {

  state = {
    isShowListUser: true
  }

  handleShowHide= ()=> {
    this.setState({isShowListUser: !this.state.isShowListUser});
  }
  render() {
    const { listUsers } = this.props;
    //props: stand for Properties
    // console.table(listUsers);
    return (
      <div>
        <div>
          <button onClick={()=>{this.handleShowHide()}}>Hide List User: 
          {this.state.isShowListUser === true ? "Hide List User" : "Show List User"}</button>
        </div>
        {this.state.isShowListUser && 
      <div>
        {listUsers.map((user,index) => {
        return (
              <div className={+user.age > 18 ? "green" : "red"}>
                <div>My name's {user.name}</div>
                <div>My age's {user.age}</div>
                <hr />
              </div>
            );
        })}
     </div>
        }
     </div>

    );
  }
}

export default DisplayInfo;
