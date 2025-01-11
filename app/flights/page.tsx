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
      <div style={{ width: "100%", maxWidth: 1400 }}>
        <FlightsCharts flightData={flightData}></FlightsCharts>
      </div>
    </div>
  );
}
