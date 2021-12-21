import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';

export const CurrentTemp = ({data}) => {
  function getIcon(iconCode) {
    return "http://openweathermap.org/img/w/" + iconCode + ".png";
  }
  const wind = `Wind ${data.wind.speed}`;
  const humidity = `Humidity ${data.main.humidity}`;

  return (
    <Card className="currentTemp-container">
      <CardContent>
      <div className="currentTemp-details">
        <Chip label={wind} variant="outlined"></Chip>
        <Chip label={humidity} variant="outlined">Humidity</Chip>
        
      </div>
      <List>
        <ListItem className="primary-temp">
        <img 
          className="weatherIcon" 
          alt="weather icon"
          src={getIcon(data.weather[0].icon)} />
          {Math.round(data.main.temp)}° {data.weather[0].main}
        </ListItem>
        <ListItem className="secondary-temp">
          <strong>Feels like:</strong> {data.main.feels_like}° 
          <strong>Low:</strong> {data.main.temp_min}° 
          <strong>High:</strong> {data.main.temp_max}°
        </ListItem>
        <ListItem className="temp-description">{data.weather[0].description}</ListItem>
      </List>
      </CardContent>
    </Card>
  )
}