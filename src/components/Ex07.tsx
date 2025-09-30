import { useEffect } from "react";

function App() {
  const numbers = [1, 2, 3, 4, 5, 6];

  function myForEach<T>(
    arr: T[],
    callback: (item: T, index: number, array: T[]) => void
  ): void {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }

  useEffect(() => {
    myForEach<number>(numbers, (item: number, index: number, array: number[]) => {
      console.log(`Vị trí: ${index} | Phần tử: ${item} | Mảng: [${array}]`);
    });
  }, []);

  return <h1>...</h1>;
}

export default App;
