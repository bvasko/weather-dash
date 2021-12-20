import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export const CurrentTemp = ({data}) => {
  return (
    <Card className="currentTemp-container">
      <CardContent>
      <Typography className="city-title" variant="h5">{data.name || ''}</Typography>
      <List>
        <ListItem>
          {Math.round(data.main.temp)}°
        </ListItem>
      </List>
      </CardContent>
    </Card>
  )
}