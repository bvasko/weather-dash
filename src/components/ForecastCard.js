export const ForecastCard = (data, i) => {
  console.log(data)
  return (
    <div>
      <h4>Date</h4>
      <img src="" />
      <ul>
        <li key={i}>Temp: {data.date}</li>
        <li>Wind:</li>
      </ul>
    </div>
  ); 
}