import React from "react";
import  './DisplayInfo.scss'
import logo from './../logo.svg'

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
      <div className="display-info-container">
        <div>
          <button onClick={()=>{this.handleShowHide()}}>
          {this.state.isShowListUser === true ? "Hide List Users" : "Show List Users"}</button>
        </div>
        {this.state.isShowListUser && 
      <div>
        {listUsers.map((user,index) => {
        return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>
                <div>My name's {user.name}</div>
                <div>My age's {user.age}</div>
                </div>
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
