import React from "react";

function calculate(
  a: number,
  b: number,
  callback: (result: number) => void
): void {
  const sum: number = a + b;
  callback(sum);
}

const Demo: React.FC = () => {
  const handleCalculate = () => {
    calculate(5, 7, (result: number) => {
      alert(`Kết quả của phép tính là: ${result}`);
    });
  };

  return (
    <div className="p-4">
      <button
        onClick={handleCalculate}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Tính tổng 5 + 7
      </button>
    </div>
  );
};

export default Demo;
