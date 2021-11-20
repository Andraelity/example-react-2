import logo from './logo.svg';
import './App.css';
import {Text, View} from 'react-native'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React colocar en 
        </a>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </header>
      <a color ="green">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
      </a>
      <div align = "justify">
        <font color = "green"
              size = "10"
              aling = "left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        </font>
      </div>
      <form>
        <label for="username">Username:</label>
        <input type="text" name="username" id="username" />

      </form>
      <Text>
        Hello this is the code i try to create
      </Text>
    </div>
  );
}

export default App;
