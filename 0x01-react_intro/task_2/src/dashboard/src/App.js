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
          <form>
            <label>Email</label>
            <input type="email" />

            <label>Password</label>
            <input type="password" />

            <button type="submit">Ok</button>
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
