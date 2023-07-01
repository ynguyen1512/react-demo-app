import React from "react";
import  './DisplayInfo.scss'
import logo from './../logo.svg'

class DisplayInfo extends React.Component {

  constructor(props) {
    console.log("call constructor: 1")
    super(props)
    this.state = {
      isShowListUser: true
    }
  }

  componentDidUpdate() {
    console.log("call constructor: 1")

  }
  componentDidMount(){
    console.log("call me did mount")
    setTimeout(() => {
      document.title =  "My Page"
    },3000)
  }

  handleShowHide= ()=> {
    this.setState({isShowListUser: !this.state.isShowListUser});
  }
  render() {
    console.log("Call me render")
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
                <div>
                  <button onClick={()=> this.props.handleDeleteUser(user.id)}>Delete</button>
                </div>
                <hr/>
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
