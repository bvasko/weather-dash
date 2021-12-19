import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';

export const ForecastCard = ({data, i}) => {
  console.log('fc data', data);
  const times = ["12 am", "3 am", "6 am", "9 am", "12 pm", "3 pm", "6 pm", "9 pm"];
  /**
   * There should always be 8 blocks
   * so populate with empty data for past times
   * times: 12, 3, 6, 9
   */
  function addFiller() {
    const fillerLen = 8 - data.length;
    for (let i=0; i < fillerLen; i++) {
      return (
        <div className={`hourly-block`}>
          <span className="time">{times[i]}</span>
          <span className="currTemp"> -- </span>
        </div>)
    }
  }

  return (
    <Card key={i}>
       <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        {dayjs(data[0].dt_txt).format('MMM DD YYYY')}
        </Typography>
        <Stack direction="row" disablePadding>
          { data.length < 8 ? 
            addFiller() :
          data.map((obj, i, arr) => 
              <div className={`hourly-block`}>
                <span className="time">{dayjs(obj.dt_txt).format("h a")}</span>
                <span className="currTemp">{Math.round(obj.main.feels_like)}</span>
              </div>
          )}
        </Stack>
      </CardContent>
    </Card>
  ); 
}