import './App.css';
import {Board, Game, Square} from "./components"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Tic Tac Toe
        </h1>
        
      </header>
      <main className="App-main">
        <Board />
        
        <Game />
      </main>
      <footer className="App-footer"> 
        Made with love in Ankara, Turkey
      </footer>
    </div>
  );
}

export default App;
