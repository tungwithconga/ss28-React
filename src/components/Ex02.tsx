import React from "react";

type DelayedCallbackProps = {
  callback: () => void;
  delay: number;
};

function delayedCallback(callback: () => void, delay: number): void {
  setTimeout(callback, delay);
}

const Demo: React.FC = () => {
  const handleClick = () => {
    delayedCallback(() => {
      alert("Hàm callback đã chạy sau 2 giây!");
    }, 2000);
  };

  return (
    <div className="p-4">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Gọi delayedCallback
      </button>
    </div>
  );
};

export default Demo;
