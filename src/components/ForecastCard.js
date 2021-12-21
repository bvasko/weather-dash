import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import dayjs from 'dayjs';

export const ForecastCard = ({data, i}) => {
  /**
   *  date, 
   * an icon representation of weather conditions, 
   * the temperature, 
   * the wind speed, 
   * and the humidity
   */
  function getIcon(iconCode) {
    return "http://openweathermap.org/img/w/" + iconCode + ".png";
  }
  return (
    <Card key={i}>
       <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        {dayjs(data[0].dt_txt).format('MMM DD YYYY')}
        </Typography>
        <Stack direction="row" disablePadding>

          { data.map((obj, i, arr) => {
              const wind = `Wind: ${obj.wind.speed}`;
              const humidity = `Humidity: ${obj.main.humidity}`;
              return (<div className={`hourly-block`}>
                <span className="icon"><img src={getIcon(obj.weather[0].icon)} /></span>
                <span className="tickmark">|</span>
                <span className="time">{dayjs(obj.dt_txt).format("h a")}</span>
                <span className="currTemp">{Math.round(obj.main.feels_like)}</span>
                <span className="forecastChip">{wind}mph</span>
                <span className="forecastChip">{humidity}%</span>
              </div>);
            }
            )
          }
        </Stack>
      </CardContent>
    </Card>
  ); 
}