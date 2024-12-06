// To access the store, use it like a react hook!
import { useEffect } from "react";
import { useCounterStore } from "../store";

// Using the store outside any component

// Zustand stores are a custom hook, but they can also be used not as a hook and use
// them outside components.
const LogCount = () => {
  const count = useCounterStore.getState().count;
  console.log("Outside", count);
};
const SetCount = () => {
  useCounterStore.setState({ count: 125 });
};

const CountingMachine = ({ count }: { count: number }) => {
  // Getting the actions for the state
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const make42 = useCounterStore((state) => state.make42);
  // Async Action
  const incrementAsync = useCounterStore((state) => state.incrementAsync);

  // This code causes Infinite re-renders:
  // const [inc, dec] = useCounterStore((s)=>[s.increment, s.decrement])

  // - Because everytime it renders, it creates a new array reference and react subscribes to this
  //   array reference and rerenders bc it is newly constructed on every call.
  //   (same with object notation)
  // - To use this kind of declaration, use Zustand's `useShallow()`.

  // Use the non hook usage of the store on componenent and integrate it to the component lifecycle
  useEffect(() => {
    // Even tho we used this inside a component, the value of the store was not from
    // the component it is called.
    LogCount();
    SetCount();
  }, []);

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={make42}>Do 42!</button>
      <button onClick={incrementAsync}>Increment (Async)</button>
    </div>
  );
};

export default CountingMachine;
