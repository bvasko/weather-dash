import { useState, useEffect} from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CurrentTemp } from './components/CurrentTemp.js';
import { SearchBar } from './components/SearchBar.js';
import { ForecastComponent } from './components/ForecastComponent.js';
import './css/App.css';


function App() {
  const [query, setQuery] = useState('');
  const [temp, setTemp] = useState('');
  const [status, setStatus] = useState('');
  const [cityData, setCityData] = useState({name: ''});
  const [forecastData, setForecastData] = useState([]);
  const baseUrl = `http://api.openweathermap.org/data/2.5/`;
  const appId = `&appid=${process.env.REACT_APP_API_KEY}`;
  const units = `&units=imperial`;
  let getUrl = (queryType) => `${baseUrl}${queryType}?q=${query}${appId}${units}`;
  // useFetch should trigger everytime query changes
  //weather?q={city name}&appid={API key}
  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      /**
       * TODO: Move this into a custom hook
       */
      setStatus('fetching');
      const weatherResponse = await fetch(getUrl('weather'));
      if (weatherResponse.status === 404 || !weatherResponse.ok) {
        setStatus('error');
      }
      const data = await weatherResponse.json();
      setCityData(data);
      setStatus('fetched');

      setStatus('fetching');
      const response = await fetch(getUrl('forecast'));
      if (response.status === 404 || !response.ok) {
        setStatus('error');
      }
      const forecast = await response.json();
      setForecastData(forecast.list);
      setStatus('fetched');
    };
    fetchData();
  }, [query]);
  function handleClick(e) {
    setQuery(temp);
  }
  function handleChange(e) {
    setTemp(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Weather Dashboard</Typography>
      </header>

      <Grid container spacing={2}>
        <Grid item xs={3} md={4}>
          <SearchBar handleClick={handleClick} handleChange={handleChange} query={query} />
        </Grid>
        
        { status === 'fetched' ? 
        <Grid item xs={9} md={8}>
          <div className="main">
          <CurrentTemp data={cityData} />
          <ForecastComponent data={forecastData} />
          </div>
        </Grid> :
        <Grid item xs={9} md={8}>
          <div className="main">
          <Typography variant="h5">Nothing Found</Typography>
          </div>
        </Grid>
        }
      </Grid>
    </div>
  );
}

export default App;
