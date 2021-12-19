import Stack from '@mui/material/Stack';
import { ForecastCard } from './ForecastCard';

export const ForecastComponent = ({data, i}) => {
  let sortByDate = {};
  const parseData = data => data.forEach(obj => {
    //get date for current object
    const date = obj.dt_txt.split(" ")[0];
    //get key
    if (!sortByDate[date]) {
      sortByDate[date] = [obj];
    } else {
      sortByDate[date].push(obj)
    }
  });
  parseData(data);
  console.log('sort ', sortByDate);
  const dateKeys = Object.keys(sortByDate);
  return (
    <Stack direction="column" spacing={2}>
      {dateKeys.map((key, i) => {
          const dataObj = sortByDate[key];
          return <ForecastCard key={key} data={dataObj} i={i} />;
        }
      )}
    </Stack> 
  ); 
}