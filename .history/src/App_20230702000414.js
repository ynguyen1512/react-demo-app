import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {

  return (
    <div className="app-container">
      <Header/>
      <div>
    </div>
      Test link
      <div>
        <button>Go to user page</button>
        <button>Go to admin page</button>
      </div>
    </div>
  );
};

export default App;
