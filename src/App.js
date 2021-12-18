import Grid from '@mui/material/Grid';
import { CurrentTemp } from './components/CurrentTemp.js';
import { SearchBar } from './components/SearchBar.js';
import { ForecastCard } from './components/ForecastCard.js';
import Stack from '@mui/material/Stack';
import './css/App.css';


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
      </header>

      <Grid container spacing={2}>
        <Grid item xs={3} md={4}>
          <SearchBar />
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
