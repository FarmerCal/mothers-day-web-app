import './App.css';

import calandmum from './assets/calandmum.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={calandmum} className="App-logo" alt="logo" />
        <h1>
          Mel Day is Epic
        </h1>
        <p>
          An epic mum, epic friend, epic creator.
        </p>
        <p>
          Love you so much mum!
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
