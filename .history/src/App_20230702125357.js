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
      <div className="app-content">
          
      </div>
      <div>
    </div>
      
    </div>
  );
};

export default App;