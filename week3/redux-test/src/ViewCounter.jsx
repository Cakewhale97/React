import { useSelector } from "react-redux";

export default function ViewCounter() {
    const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Counter {counter} </h1>
    </div>
  );
}
