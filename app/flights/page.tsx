import FlightsCharts from "./FlightsCharts";

export default async function FlightsPage() {
  const baseUrl = process.env.NEXTAUTH_URL;
  const flightsRes = await fetch(`${baseUrl}/api/flights`);
  const flightsJson = await flightsRes.json();
  const flightData = flightsJson.data;
  console.log(flightsJson);
  return (
    <div>
      <FlightsCharts flightData={flightData}></FlightsCharts>
    </div>
  );
}
