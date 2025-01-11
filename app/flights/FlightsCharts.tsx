"use client";

import { Line, Bar, Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataset,
} from "chart.js";

// Register required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Type definitions for flight data
interface FlightData {
  flight_numbers: string;
  initial_departure_date: string;
  return_departure_date: string;
  stops: number;
  price: number;
  duration: number;
}

interface ScatterData {
  datasets: {
    label: string;
    data: { x: number; y: number; stops: number }[];
    backgroundColor: (context: {
      dataset: ChartDataset;
      dataIndex: number;
    }) => string;
    pointRadius: number;
  }[];
}

interface LineData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    tension: number;
  }[];
}

interface BarData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

interface FlightsChartsProps {
  flightData: FlightData[];
}

const createChartsData = (flightData: FlightData[]) => {
  const scatterData: ScatterData = {
    datasets: [
      {
        label: "Flight Prices vs Duration",
        data: flightData.map((flight) => ({
          x: flight.duration, // Duration as X-axis
          y: flight.price, // Price as Y-axis
          stops: flight.stops, // Stops for color
        })),
        backgroundColor: function (context: {
          dataset: ChartDataset;
          dataIndex: number;
        }) {
          const dataset = context.dataset;

          if (!dataset || !dataset.data) return "#f44336"; // Default to red if dataset or data is null

          const dataPoint = dataset.data[context.dataIndex] as {
            x: number;
            y: number;
            stops: number;
          };

          const stops = dataPoint.stops;

          return stops === 0 ? "#4caf50" : stops === 1 ? "#ffeb3b" : "#f44336"; // Softer colors for stops
        },
        pointRadius: 8,
      },
    ],
  };

  const initialDepartureLineData: LineData = {
    labels: flightData.map((flight) => flight.initial_departure_date),
    datasets: [
      {
        label: "Price ($) on Initial Departure Date",
        data: flightData.map((flight) => flight.price), // Prices for initial departure
        fill: false,
        borderColor: "#4b9bff", // Softer blue
        tension: 0.1,
      },
      {
        label: "Duration (minutes) on Initial Departure Date",
        data: flightData.map((flight) => flight.duration), // Durations for initial departure
        fill: false,
        borderColor: "#f0a500", // Softer golden yellow
        tension: 0.1,
      },
    ],
  };

  const returnDepartureLineData: LineData = {
    labels: flightData.map((flight) => flight.return_departure_date),
    datasets: [
      {
        label: "Price ($) on Return Departure Date",
        data: flightData.map((flight) => flight.price), // Prices for return departure
        fill: false,
        borderColor: "#ff4b4b", // Softer red
        tension: 0.1,
      },
      {
        label: "Duration (minutes) on Return Departure Date",
        data: flightData.map((flight) => flight.duration), // Durations for return departure
        fill: false,
        borderColor: "#4caf50", // Softer green
        tension: 0.1,
      },
    ],
  };

  const barData: BarData = {
    labels: flightData.map((flight) => flight.flight_numbers), // Flight numbers as labels
    datasets: [
      {
        label: "Price ($)",
        data: flightData.map((flight) => flight.price),
        backgroundColor: "#4b9bff", // Softer blue
        borderColor: "#4b9bff", // Softer blue
        borderWidth: 1,
      },
      {
        label: "Duration (minutes)",
        data: flightData.map((flight) => flight.duration),
        backgroundColor: "#88e788", // Softer golden yellow
        borderColor: "#88e788", // Softer golden yellow
        borderWidth: 1,
      },
    ],
  };

  return {
    scatterData,
    initialDepartureLineData,
    returnDepartureLineData,
    barData,
  };
};

const FlightsCharts = ({ flightData }: FlightsChartsProps) => {
  const {
    scatterData,
    initialDepartureLineData,
    returnDepartureLineData,
    barData,
  } = createChartsData(flightData);

  return (
    <div>
      <h1 style={{ color: "#fff" }}>Flight Data Charts</h1>

      <div>
        <h2 style={{ color: "#fff" }}>Initial Departure Dates</h2>
        <Line
          data={initialDepartureLineData}
          options={{
            scales: {
              x: {
                ticks: {
                  color: "#ddd", // Light gray for ticks
                },
                grid: {
                  color: "#444", // Dark gray for gridlines
                },
                title: {
                  display: true,
                  text: "Initial Departure Date",
                  color: "#fff",
                },
              },
              y: {
                ticks: {
                  color: "#ddd", // Light gray for ticks
                },
                grid: {
                  color: "#444", // Dark gray for gridlines
                },
                title: { display: true, text: "Value", color: "#fff" },
              },
            },
          }}
        />
      </div>

      <div>
        <h2 style={{ color: "#fff" }}>Return Departure Dates</h2>
        <Line
          data={returnDepartureLineData}
          options={{
            scales: {
              x: {
                ticks: {
                  color: "#ddd", // Light gray for ticks
                },
                grid: {
                  color: "#444", // Dark gray for gridlines
                },
                title: {
                  display: true,
                  text: "Return Departure Date",
                  color: "#fff",
                },
              },
              y: {
                ticks: {
                  color: "#ddd", // Light gray for ticks
                },
                grid: {
                  color: "#444", // Dark gray for gridlines
                },
                title: { display: true, text: "Value", color: "#fff" },
              },
            },
          }}
        />
      </div>

      <div>
        <h2 style={{ color: "#fff" }}>Price & Duration by Flight</h2>
        <Bar
          data={barData}
          options={{
            scales: {
              x: {
                ticks: {
                  color: "#ddd", // Light gray for ticks
                },
                grid: {
                  color: "#444", // Dark gray for gridlines
                },
              },
              y: {
                ticks: {
                  color: "#ddd", // Light gray for ticks
                },
                grid: {
                  color: "#444", // Dark gray for gridlines
                },
                title: { display: true, text: "Value", color: "#fff" },
              },
            },
          }}
        />
      </div>
      <div>
        <h2 style={{ color: "#fff" }}>Price vs Duration</h2>
        <Scatter
          data={scatterData}
          options={{
            scales: {
              x: {
                ticks: {
                  color: "#ddd", // Light gray for ticks
                },
                grid: {
                  color: "#444", // Dark gray for gridlines
                },
                title: {
                  display: true,
                  text: "Duration (minutes)",
                  color: "#fff",
                },
              },
              y: {
                ticks: {
                  color: "#ddd", // Light gray for ticks
                },
                grid: {
                  color: "#444", // Dark gray for gridlines
                },
                title: { display: true, text: "Price ($)", color: "#fff" },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default FlightsCharts;
