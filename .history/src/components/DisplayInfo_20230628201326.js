import React, { useState } from "react";
import  './DisplayInfo.scss'
import logo from './../logo.svg'

//stateless vs stateful
// class DisplayInfo extends React.Component {

//   render() {
//     console.log("Call me render")
//     const { listUsers } = this.props;
//     //props: stand for Properties
//     // console.table(listUsers);
//     return (
//       <div className="display-info-container">
        
//         {true && 
//       <>
//         {listUsers.map((user,index) => {
//         return (
//               <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                 <div>
//                   <div>My name's {user.name}</div>
//                   <div>My age's {user.age}</div>
//                 </div>
//                 <div>
//                   <button onClick={()=> this.props.handleDeleteUser(user.id)}>Delete</button>
//                 </div>
//                 <hr/>
//               </div>
//             );
//         })}
//      </>
//         }
//      </div>

//     );
//   }
// }

const DisplayInfo = (props) => {
  const { listUsers } = props; //object

  const [isShowHideListUser, setShowHideListUser] = useState(true)
        const handleShowHideListUser = ()=> {
          setShowHideListUser(!isShowHideListUser)
        }
        return (
          <div className="display-info-container">
            <div>
              <span onClick={()=> handleShowHideListUser()}>Show list users
                {isShowHideListUser === true ? "Hide list users" : "Show list users}
              </span>
            </div>
            {isShowHideListUser && 
          <>
            {listUsers.map((user,index) => {
            return (
                  <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                    <div>
                      <div>My name's {user.name}</div>
                      <div>My age's {user.age}</div>
                    </div>
                    <div>
                      <button onClick={()=> props.handleDeleteUser(user.id)}>Delete</button>
                    </div>
                    <hr/>
                  </div>
                );
            })}
         </>
            }
         </div>
    
        );
      }
    
export default DisplayInfo;
