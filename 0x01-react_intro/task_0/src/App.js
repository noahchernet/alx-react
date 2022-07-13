import logo from "./dashboard/holberton_logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200px" />
        <h1>School dashboard</h1>
      </header>
      <body>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
        </div>
      </body>
      <footer>
        <div className="App-footer">
          <p>
            <i>Copyright 2020 - holberton School</i>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
