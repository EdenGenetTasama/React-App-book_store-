import logo from './logo.svg';
import './App.css';
import BookCom from './components/book';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BookCom nameOfBook="Harry potter"/>
      </header>
    </div>
  );
}

export default App;
