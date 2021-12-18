import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export const CurrentTemp = () => {
  return (
    <Card>
      <CardContent>
      <Typography variant="h3">Atlanta (3/30/2021)</Typography>
      <List>
        <ListItem>
          Temp: 74.01F
        </ListItem>
      </List>
      </CardContent>
    </Card>
  )
}