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
  const [status, setStatus] = useState('');
  const [cityData, setCityData] = useState({name: ''});
  const [oneCallData, setOneCallData] = useState();
  const [forecastData, setForecastData] = useState([]);
  const baseUrl = `https://api.openweathermap.org/data/2.5/`;
  const appId = `&appid=${process.env.REACT_APP_API_KEY}`;
  const units = `&units=imperial`;
  let getUrl = (queryType, queryStr) => `${baseUrl}${queryType}${queryStr}${appId}${units}`;
  // useFetch should trigger everytime query changes
  //onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      /**
       * TODOs: 
       * X get philadelphia as default value on page load
       * - integrate Snapyr
       * - Have search box detect 'enter' key and trigger search if it is pressed
       */
      setStatus('fetching');
      const weatherResponse = await fetch(getUrl('weather', `?q=${query}`));
      if (weatherResponse.status === 404 || !weatherResponse.ok) {
        setStatus('error');
      }
      const data = await weatherResponse.json();
      setCityData(data);
      setStatus('fetched');

      setStatus('fetching');
      const forecastResponse = await fetch(getUrl('forecast', `?q=${query}`));
      if (forecastResponse.status === 404 || !forecastResponse.ok) {
        setStatus('error');
      }
      const forecast = await forecastResponse.json();
      setForecastData(forecast.list);
      setStatus('fetched');

      setStatus('fetching');
      const oneCallResponse = await fetch(getUrl('onecall', `?lat=${cityData.coord.lat}&lon=${cityData.coord.lon}&exclude=minutely,hourly`));
      if (oneCallResponse.status === 404 || !oneCallResponse.ok) {
        setStatus('error');
      }
      const onecall = await oneCallResponse.json();
      setOneCallData(onecall);
      setStatus('fetched');
      console.log('onecall ', onecall)

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
            <Typography className="city-title" variant="h3">{cityData.name || ''} </Typography>
            <p>{dayjs(cityData.dt*1000).format('MMM DD YYYY')}</p>
            <CurrentTemp uvi={oneCallData.current.uvi} data={cityData} />
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
