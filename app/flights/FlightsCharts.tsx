"use client";

import { useEffect, useState } from "react";
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
  date: string;
  stops: number;
  price: number;
  duration: number;
}

interface ScatterData {
  datasets: {
    label: string;
    data: { x: number; y: number; stops: number }[];
    backgroundColor: (context: any) => string;
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
        backgroundColor: function (context: any) {
          const stops = context.raw.stops;
          return stops === 0 ? "green" : stops === 1 ? "yellow" : "red"; // Color by stops
        },
        pointRadius: 10,
      },
    ],
  };

  const lineData: LineData = {
    labels: flightData.map((flight) => flight.date), // Dates as labels
    datasets: [
      {
        label: "Price ($)",
        data: flightData.map((flight) => flight.price), // Prices
        fill: false,
        borderColor: "blue",
        tension: 0.1,
      },
      {
        label: "Duration (minutes)",
        data: flightData.map((flight) => flight.duration), // Durations
        fill: false,
        borderColor: "orange",
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
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 1,
      },
      {
        label: "Duration (minutes)",
        data: flightData.map((flight) => flight.duration),
        backgroundColor: "orange",
        borderColor: "orange",
        borderWidth: 1,
      },
    ],
  };

  return { scatterData, lineData, barData };
};

const FlightsCharts = ({ flightData }: FlightsChartsProps) => {
  const { scatterData, lineData, barData } = createChartsData(flightData);

  return (
    <div>
      <h1>Flight Data Charts</h1>

      <div>
        <h2>Scatter Plot: Price vs Duration</h2>
        <Scatter
          data={scatterData}
          options={{
            scales: {
              x: { title: { display: true, text: "Duration (minutes)" } },
              y: { title: { display: true, text: "Price ($)" } },
            },
          }}
        />
      </div>

      <div>
        <h2>Line Chart: Price & Duration Over Time</h2>
        <Line
          data={lineData}
          options={{
            scales: {
              x: { title: { display: true, text: "Date" } },
              y: { title: { display: true, text: "Value" } },
            },
          }}
        />
      </div>

      <div>
        <h2>Bar Chart: Price & Duration by Flight</h2>
        <Bar
          data={barData}
          options={{
            scales: {
              y: { title: { display: true, text: "Value" } },
            },
          }}
        />
      </div>
    </div>
  );
};

export default FlightsCharts;
