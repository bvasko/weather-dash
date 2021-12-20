import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export const CurrentTemp = ({data}) => {
  console.log('start ', data)
  return (
    <Card className="currentTemp-container">
      <CardContent>
      <List>
        <ListItem className="primary-temp">
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