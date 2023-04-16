import './App.css';
import NoteState from './NoteState';
import Home from './components/Home';

function App() {
  return (
    <NoteState>
      <div className="App">
        <Home />
      </div>
    </NoteState>
  );
}

export default App;
