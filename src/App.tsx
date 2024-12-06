import "./App.css";
// To access the store, use it like a react hook!
import { useCounterStore } from "./store";
import CountingMachine from "./components/CountingMachine";

function App() {
  // The hook can return a selector or an action and assign it to a variable
  // and the state/store is passed to the parameter of the hook.

  // Selector Function
  //   - You pass a "selector function" on the custom hook that allows you to select,
  //     or extract specific pieces of the state.
  //   - Controls subscriptions, component will only re-render if the selected states changes.
  //   - if omitted, it fetches and subscribes to the entire store. (All selectors and actions
  //     which would not be ideal because rerenders will happen if one of the selectors changes.)

  const count = useCounterStore((state) => state.count);
  // `counter` contains just the `state.count` state.

  return (
    <>
      <CountingMachine count={count} />
    </>
  );
}

export default App;
