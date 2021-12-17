import './App.css';
import {CurrentTemp} from './components/CurrentTemp.js';
import {SearchBar} from './components/SearchBar.js';
import {ForecastCard} from './components/ForecastCard.js';
function App() {
  const testData = [
    {
      date: "3/31/2021",
      temp: "73.72"
    },
    {
      date: "3/31/2021",
      temp: "73.72"
    },
    {
      date: "3/31/2021",
      temp: "73.72"
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Dashboard</h1>
        <div className="container">
          <SearchBar />
          <CurrentTemp data={testData} />
          {testData.map((obj, i) => <ForecastCard data={obj} i={i} />)}
        </div>
      </header>
    </div>
  );
}

export default App;
