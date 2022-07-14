import logo from "../holberton_logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

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
          <form style={{ display: "flex" }}>
            <label htmlFor="email" className="flex-item">
              Email
            </label>
            <input id="email" type="email" className="flex-item" />

            <label htmlFor="password" className="flex-item">
              Password
            </label>
            <input id="password" type="password" className="flex-item" />

            <button
              type="submit"
              className="flex-item"
              style={{ marginLeft: "1.5rem" }}
            >
              Ok
            </button>
          </form>
        </div>
      </body>
      <footer>
        <div className="App-footer">
          <p>
            <i>
              Copyright {getFullYear()} - {getFooterCopy(true)}
            </i>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
