import './App.css';
import Amountupdate from './components/Amountupdate';
import Bottom from './components/Bottom';
import Mid from './components/Mid';
import Navbar from './components/Navbar';
import Top from './components/Top';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Amountupdate />
      <Top />
      <Mid />
      <Bottom />
    </div>
  );
}

export default App;
