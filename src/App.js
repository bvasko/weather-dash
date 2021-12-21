import { useState, useEffect} from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CurrentTemp } from './components/CurrentTemp.js';
import { SearchBar } from './components/SearchBar.js';
import { ForecastComponent } from './components/ForecastComponent.js';
import dayjs from 'dayjs';
import './css/App.css';

function App() {
  const [query, setQuery] = useState('Philadelphia');
  const [temp, setTemp] = useState('Philadelphia');
  const [status, setStatus] = useState('idle');
  const [cityData, setCityData] = useState({name: ''});
  const [forecastData, setForecastData] = useState();
  const baseUrl = `https://api.openweathermap.org/data/2.5/`;
  const appId = `&appid=${process.env.REACT_APP_API_KEY}`;
  const units = `&units=imperial`;
  let getUrl = (queryType, queryStr) => `${baseUrl}${queryType}${queryStr}${appId}${units}`;
  const fetchData = async (api, queryStr, cb) => {
    /**
     * TODOs: 
     * X get philadelphia as default value on page load
     * - integrate Snapyr
     * - Have search box detect 'enter' key and trigger search if it is pressed
     */
    setStatus('fetching');
    const url = getUrl(api, queryStr);
    const response = await fetch(url);
    const data = await response.json();
    cb(data);
    setStatus('fetched');
    console.log(data);
  };

  useEffect(() => {
    fetchData('weather', `?q=${query}`, setCityData);
    fetchData('forecast', `?q=${query}`, setForecastData);
  },[query]);

  function handleClick(e) {
    setQuery(temp);
    fetchData('weather', `?q=${query}`, setCityData);
    fetchData('forecast', `?q=${query}`, setForecastData);
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
        
        
        <Grid item xs={9} md={8}>
          <div className="main">
            <Typography className="city-title" variant="h3">{cityData.name || ''} </Typography>
            <p>{dayjs(cityData.dt*1000).format('MMM DD YYYY')}</p>
            { cityData.wind ? <CurrentTemp data={cityData} /> : "Loading" }
            { forecastData ? <ForecastComponent data={forecastData.list} /> : ''}
          </div>
        </Grid> 

        <Grid item xs={9} md={8}>
          <div className="main">
          <Typography variant="h5">Nothing Found</Typography>
          </div>
        </Grid>
        
      </Grid>
    </div>
  );
}

export default App;
