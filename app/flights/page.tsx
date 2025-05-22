import FlightsCharts from "./FlightsCharts";

export default async function FlightsPage() {
  const baseUrl = process.env.NEXTAUTH_URL;
  const flightsRes = await fetch(`${baseUrl}/api/flights`, {
    cache: "no-store",
  });
  const flightsJson = await flightsRes.json();
  const flightData = flightsJson.data;
  console.log(flightsJson);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 2000 }}>
        {flightData.length > 0 && (
          <FlightsCharts flightData={flightData}></FlightsCharts>
        )}
        {flightData.length == 0 && <div>No data found</div>}
      </div>
    </div>
  );
}
