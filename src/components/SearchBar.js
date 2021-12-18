import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export const SearchBar = ({handleChange, handleClick}) => {
  return (
    <Stack className="sidebar"spacing={2}>
      <h2>Search for a City:</h2>
      <TextField onChange={e => handleChange(e)} id="outlined-basic" label="Outlined" variant="outlined" />
      <Button onClick={e => handleClick(e)} variant="outlined">Search</Button>
    </Stack>
  )
}