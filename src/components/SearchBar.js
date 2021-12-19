import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

export const SearchBar = ({handleChange, handleClick}) => {
  return (
    <Stack className="sidebar"spacing={2}>
      <Typography variant="h5">Search for a City</Typography>

      <Paper
      component="form"
      sx={{ p: '2px 4px', 
      display: 'flex', 
      alignItems: 'center' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="City"
        inputProps={{ 'aria-label': 'City' }}
        onChange={e => handleChange(e)} 
      />

        <IconButton onClick={e => { handleClick(e);}} aria-label="search"><SearchIcon /></IconButton>
      
      </Paper>
    </Stack>
  )
}