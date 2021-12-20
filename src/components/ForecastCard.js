import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';

export const ForecastCard = ({data, i}) => {
  return (
    <Card key={i}>
       <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        {dayjs(data[0].dt_txt).format('MMM DD YYYY')}
        </Typography>
        <Stack direction="row" disablePadding>

          { data.map((obj, i, arr) => 
              <div className={`hourly-block`}>
                <span className="time">{dayjs(obj.dt_txt).format("h a")}</span>
                <span className="currTemp">{Math.round(obj.main.feels_like)}</span>
              </div>)
          }
        </Stack>
      </CardContent>
    </Card>
  ); 
}