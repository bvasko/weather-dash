import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export const CurrentTemp = ({data}) => {
  return (
    <Card>
      <CardContent>
      <Typography variant="h5">{data.city.name || ''}</Typography>
      <List>
        <ListItem>
          Temp: 74.01F
        </ListItem>
      </List>
      </CardContent>
    </Card>
  )
}