import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const SearchBar = () => {
  return (
    <Stack className="sidebar"spacing={2}>
      <h2>Search for a City:</h2>
      <input />
      <Button variant="outlined">Search</Button>
    </Stack>
  )
}