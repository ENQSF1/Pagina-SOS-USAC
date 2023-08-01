import React from "react";

export default function b() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3">
          <div className="bg-red-200">1</div>
          <div className="bg-red-300">2</div>
          <div className="bg-red-400">3</div>
          <div className="bg-red-500">4</div>
          <div className="bg-red-600">5</div>
          <div className="bg-red-700">6</div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3  bg-blue-500">
          <div className="w-16 h-16 bg-red-200">1</div>
          <div className="w-16 h-16 bg-red-300">2</div>
          <div className="w-16 h-16  bg-red-400">3</div>
          <div className=" w-16 h-16 bg-red-500">4</div>
          <div className="w-16 h-16 bg-red-600">5</div>
          <div className="w-16 h-16 bg-red-700">6</div>
        </div>
      </div>
    </>
  );
}
