export const ForecastCard = (data) => {
  console.log(data)
  return (
    <div>
      <h4>Date</h4>
      <img src="" />
      <ul>
        <li>Temp: {data.date}</li>
        <li>Wind:</li>
      </ul>
    </div>
  ); 
}