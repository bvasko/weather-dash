import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export const SearchHistory = ({data, handleClick}) => {
  console.log('local storage ', data);
  return (
    <Stack className="sidebar"spacing={2}>
      <Paper
      component="form"
      sx={{ p: '2px 4px', 
      alignItems: 'center' }}
      >
        <Typography variant="h6">Search History</Typography>
        <List>
          {data.map((searchStr) => 
            <ListItem onClick={() => { handleClick(searchStr);}}>{searchStr}</ListItem>
          )}
        </List>
      </Paper>
    </Stack>
  )
}