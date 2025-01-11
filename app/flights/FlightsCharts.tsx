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
          const stops = context.dataset.data[context.dataIndex].stops;
          return stops === 0 ? "#4caf50" : stops === 1 ? "#ffeb3b" : "#f44336"; // Softer colors for stops
        },
        pointRadius: 8,
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
        borderColor: "#4b9bff", // Softer blue
        tension: 0.1,
      },
      {
        label: "Duration (minutes)",
        data: flightData.map((flight) => flight.duration), // Durations
        fill: false,
        borderColor: "#f0a500", // Softer golden yellow
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

  return { scatterData, lineData, barData };
};

const FlightsCharts = ({ flightData }: FlightsChartsProps) => {
  const { scatterData, lineData, barData } = createChartsData(flightData);

  return (
    <div>
      <h1 style={{ color: "#fff" }}>Flight Data Charts</h1>

      <div>
        <h2 style={{ color: "#fff" }}>Scatter Plot: Price vs Duration</h2>
        <Scatter
          data={scatterData}
          options={{
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Duration (minutes)",
                  color: "#fff",
                },
              },
              y: { title: { display: true, text: "Price ($)", color: "#fff" } },
            },
          }}
        />
      </div>

      <div>
        <h2 style={{ color: "#fff" }}>
          Line Chart: Price & Duration Over Time
        </h2>
        <Line
          data={lineData}
          options={{
            scales: {
              x: { title: { display: true, text: "Date", color: "#fff" } },
              y: { title: { display: true, text: "Value", color: "#fff" } },
            },
          }}
        />
      </div>

      <div>
        <h2 style={{ color: "#fff" }}>Bar Chart: Price & Duration by Flight</h2>
        <Bar
          data={barData}
          options={{
            scales: {
              y: { title: { display: true, text: "Value", color: "#fff" } },
            },
          }}
        />
      </div>
    </div>
  );
};

export default FlightsCharts;
