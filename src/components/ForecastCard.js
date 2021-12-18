import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export const ForecastCard = ({data, i}) => {
  return (
    <Card key={i}>
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.date}
        </Typography>
        <List>
          <ListItem disablePadding>{data.temp}</ListItem>
        </List>
      </CardContent>
    </Card>
  ); 
}