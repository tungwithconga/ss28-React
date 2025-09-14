import React, { useEffect } from "react";

function displayNumbers(
  callback: (value: number) => void,
  delay: number
): void {
  let counter: number = 1;
  setInterval(() => {
    callback(counter);
    counter++;
  }, delay);
}

const Ex04: React.FC = () => {
  useEffect(() => {
    displayNumbers((value: number) => {
      console.log("Số:", value);
    }, 1000);
  }, []);

  return (
    <div className="p-4">
      <p className="text-lg font-semibold">
        Mở console để xem số tăng dần mỗi 1 giây
      </p>
    </div>
  );
};

export default Ex04;
