import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mel Day is Epic
        </p>
        <a
          className="App-link"
          href="https://wallofsongproject.com/mel-day/#:~:text=Mel%20Day%20is%20a%20SF,The%20Wall%20of%20Song%20Project."
          target="_blank"
          rel="noopener noreferrer"
        >
          Check her out!
        </a>
      </header>
    </div>
  );
}

export default App;
