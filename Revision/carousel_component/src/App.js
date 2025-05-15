
import './App.css';
import data from "./data/data.json"
import Carousel from "./component/Carousel"
function App() {
  console.log(data);
  return (
    <div className="App">
      <h1>Carousole</h1>
      <Carousel data={data} />
    </div>
  );
}

export default App;
