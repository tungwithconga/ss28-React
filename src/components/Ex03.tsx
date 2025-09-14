import React from "react";

function processArray(
  arr: number[],
  callback: (value: number) => void
): void {
  arr.forEach((value, index) => {
    setTimeout(() => {
      callback(value);
    }, (index + 1) * 1000); 
  });
}

const Ex03: React.FC = () => {
  const handleClick = () => {
    processArray([1, 2, 3, 4, 5], (value: number) => {
      console.log("Phần tử:", value);
    });
  };

  return (
    <div className="p-4">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-purple-500 text-white rounded"
      >
        Chạy processArray
      </button>
    </div>
  );
};

export default Ex03;
