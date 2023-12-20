"use client";
import { AreaChart } from "keep-react";
const chartData = [
  {
    price: 0,
    sell: 0,
  },
  {
    price: 300,
    sell: 200,
  },
  {
    price: 170,
    sell: 120,
  },
  {
    price: 190,
    sell: 130,
  },
  {
    price: 220,
    sell: 120,
  },
  {
    price: 400,
    sell: 213,
  },
  {
    price: 420,
    sell: 325,
  },
  {
    price: 450,
    sell: 250,
  },
  {
    price: 400,
    sell: 300,
  },
  {
    price: 500,
    sell: 400,
  },
];

export const AreaChartComponent = () => {
  return (
    <AreaChart
      chartData={chartData}
      dataKey="price"
      chartType="natural"
      secondaryDataKey="sell"
      showTooltip={true}
      showXaxis={true}
      showYaxis={true}
      showGridLine={true}
    />
  );
};
