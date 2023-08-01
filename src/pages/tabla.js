import React from "react";
import { useState } from "react";

export default function tabla() {
  const data = [
    {
      Month: "Jan",
      94: 14,
      95: 13,
      96: 14,
      97: 13,
      98: 14,
      99: 11,
      1: 11,
      2: 11,
      3: 11,
    },
    {
      Month: "Feb",
      94: 13,
      95: 15,
      96: 12,
      97: 15,
      98: 15,
      99: 12,
      1: 14,
      2: 13,
      3: 13,
    },
    {
      Month: "Mar",
      94: 16,
      95: 15,
      96: 14,
      97: 17,
      98: 16,
      99: 15,
      1: 14,
      2: 15,
      3: 15,
    },
    {
      Month: "Apr",
      94: 17,
      95: 16,
      96: 17,
      97: 17,
      98: 17,
      99: 15,
      1: 15,
      2: 16,
      3: 16,
    },
    {
      Month: "May",
      94: 21,
      95: 20,
      96: 20,
      97: 21,
      98: 22,
      99: 20,
      1: 21,
      2: 20,
      3: 19,
    },
    {
      Month: "Jun",
      94: 24,
      95: 23,
      96: 25,
      97: 24,
      98: 25,
      99: 23,
      1: 25,
      2: 23,
      3: 24,
    },
    {
      Month: "Jul",
      94: 29,
      95: 28,
      96: 26,
      97: 26,
      98: 27,
      99: 26,
      1: 25,
      2: 26,
      3: 25,
    },
    {
      Month: "Aug",
      94: 29,
      95: 28,
      96: 27,
      97: 28,
      98: 28,
      99: 27,
      1: 26,
      2: 28,
      3: 26,
    },
    {
      Month: "Sep",
      94: 24,
      95: 23,
      96: 23,
      97: 26,
      98: 24,
      99: 24,
      1: 24,
      2: 22,
      3: 21,
    },
    {
      Month: "Oct",
      94: 20,
      95: 22,
      96: 20,
      97: 22,
      98: 20,
      99: 19,
      1: 20,
      2: 22,
    },
    {
      Month: "Nov",
      94: 18,
      95: 17,
      96: 16,
      97: 17,
      98: 16,
      99: 15,
      1: 14,
      2: 15,
    },
    {
      Month: "Dec",
      94: 15,
      95: 13,
      96: 13,
      97: 14,
      98: 13,
      99: 10,
      1: 13,
      2: 11,
    },
  ];

  const [color, setColor] = useState(null);

  const reset = (color) => {
    {
      color ? setColor(false) : setColor(true);
    }
  };

  return (
    <>
      <div className="bg-red-200 flex justify-center ">
        <button
          onClick={() => reset(color)}
          className="bg-green-200 p-2 rounded-sm  "
        >
          cambiar de color
        </button>
      </div>
      <div className="container mx-auto py-4 flex justify-center items-center text-center">
        <table className="table-auto w-full">
          <thead className="bg-blue-700">
            <tr>
              <th className="px-4 py-2">Month</th>
              <th className="px-4 py-2">"94</th>

              <th className="px-4 py-2">"95</th>
              <th className="px-4 py-2">"96</th>
              <th className="px-4 py-2">"97</th>
              <th className="px-4 py-2">"98</th>
              <th className="px-4 py-2">"99</th>
              <th className="px-4 py-2">"00</th>
              <th className="px-4 py-2">"01</th>
              <th className="px-4 py-2">"02</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((data, index) => (
              <tr
                key={index}
                className={
                  color && index % 2 === 0
                    ? "bg-blue-100"
                    : color && index % 2 !== 0
                    ? "bg-blue-200"
                    : "bg-green-200"
                }
              >
                <td className="border px-4 py-2 text-center">{data.Month}</td>
                <td className="border px-4 py-2">{data[94]}</td>
                <td className="border px-4 py-2">{data[95]}</td>
                <td className="border px-4 py-2">{data[96]}</td>
                <td className="border px-4 py-2">{data[97]}</td>
                <td className="border px-4 py-2">{data[98]}</td>
                <td className="border px-4 py-2">{data[99]}</td>
                <td className="border px-4 py-2">{data[1]}</td>
                <td className="border px-4 py-2">{data[2]}</td>
                <td className="border px-4 py-2">{data[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
