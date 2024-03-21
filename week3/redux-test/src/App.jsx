import "./App.css";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./reducer/counterReducer";
import ViewCounter from "./ViewCounter";
import SignIn from "./components/SignIn.jsx";

function App() {
  const dispatch = useDispatch();

  function handleClick(action) {
    if (action === "increment") {
      dispatch(increment());
    } else if (action === "decrement") {
      dispatch(decrement());
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <ViewCounter />
        <button onClick={() => handleClick("increment")}>Increment</button>
        <button onClick={() => handleClick("decrement")}>Decrement</button>
      </header>
      <div>
        <SignIn />
      </div>
    </div>
  );
}

export default App;
