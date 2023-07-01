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
          <button onClick={()=>{this.handleShowHide()}}>
          {this.state.isShowListUser === true ? "Hide List Users" : "Show List Users"}</button>
        </div>
        {this.state.isShowListUser && 
      <div>
        {listUsers.map((user,index) => {
        return (
              <div className={+user.age > 18 ? "green" : "red"}>
                <div style={{color: 'yellow'}}>My name's {user.name}</div>
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
