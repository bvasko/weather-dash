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
  const [data, setData] = useState([]);
  
  let url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.REACT_APP_API_KEY}`;
  // useFetch should trigger everytime query changes
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
  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setStatus('fetching');
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setStatus('fetched');
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
            <CurrentTemp data={testData} />
            <Stack direction="row" spacing={2}>
              {testData.map((obj, i) => 
                <ForecastCard data={obj} i={i} />)}
            </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
