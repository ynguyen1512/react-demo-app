import "./App.scss";
import Header from "./components/Header/Header";
import {Outlet, Link} from "react-router-dom"

const App = () => {

  return (
    <div className="app-container">
      <div className="header-container">
        <Header/>

      </div>
      <div className="main-container">
        <div className="sidenav-container">

        </div>
      </div>
      
      <div>
    </div>
      Test link
      <div>
        <button>
            <Link to="/users"> Go to user page</Link>
         </button>
         <button>
            <Link to="/admins"> Go to admin page</Link>
         </button>
      </div>
    </div>
  );
};

export default App;