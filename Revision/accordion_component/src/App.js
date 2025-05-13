import logo from './logo.svg';
import './App.css';
import data from './data/data.json';
import FAQ  from './component/FAQ';

function App() {

  return (
    <div className="App">
      <FAQ data={ data} />
    </div>
  );
}

export default App;
