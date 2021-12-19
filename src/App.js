import { useState, useEffect} from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CurrentTemp } from './components/CurrentTemp.js';
import { SearchBar } from './components/SearchBar.js';
import { ForecastCard } from './components/ForecastCard.js';
import Stack from '@mui/material/Stack';
import './css/App.css';


function App() {
  const [query, setQuery] = useState('');
  const [temp, setTemp] = useState('');
  const [status, setStatus] = useState('');
  const [data, setData] = useState({city: {name: ''}});
  
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`;
  // useFetch should trigger everytime query changes
  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setStatus('fetching');
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setStatus('fetched');
      console.log('log fetch', data);
    };
    fetchData();
  }, [query, url]);
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
        <Grid item xs={9} md={8}>
            <CurrentTemp data={data} />
            <Stack direction="row" spacing={2}>
              {/* {data.map((obj, i) => 
                <ForecastCard data={obj} i={i} />)} */}
            </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
