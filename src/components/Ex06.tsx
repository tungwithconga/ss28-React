import React from "react";

type TaskCallback = () => void;

const task1 = (callback: TaskCallback): void => {
  setTimeout(() => {
    console.log("Task 1 được thực thi");
    callback();
  }, 1000);
};

const task2 = (callback: TaskCallback): void => {
  setTimeout(() => {
    console.log("Task 2 được thực thi");
    callback();
  }, 1500);
};

const task3 = (callback: TaskCallback): void => {
  setTimeout(() => {
    console.log("Task 3 được thực thi! Hoàn thành");
    callback();
  }, 2000);
};

const App: React.FC = () => {
  const handleRunTasks = () => {
    task1(() => {
      task2(() => {
        task3(() => {
          console.log("Tất cả task đã chạy xong!");
        });
      });
    });
  };

  return (
    <div className="p-4">
      <h1 className="font-bold text-xl mb-4">Demo Callback Tasks</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleRunTasks}
      >
        Run Tasks
      </button>
    </div>
  );
};

export default App;
