import React from "react";

type CheckConditionFn = (condition: boolean, callback: (result: boolean) => void) => void;

const checkCondition: CheckConditionFn = (condition, callback) => {
  setTimeout(() => {
    callback(condition);
  }, 1000);
};

const App: React.FC = () => {
  const handleResult = (result: boolean) => {
    if (result) {
      console.log("Điều kiện đúng: Thực hiện logic khi TRUE");
    } else {
      console.log("Điều kiện sai: Thực hiện logic khi FALSE");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Ví dụ checkCondition()</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        onClick={() => checkCondition(true, handleResult)}
      >
        Test True
      </button>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded mt-2 ml-2"
        onClick={() => checkCondition(false, handleResult)}
      >
        Test False
      </button>
    </div>
  );
};

export default App;
