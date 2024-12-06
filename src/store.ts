import { create } from "zustand";

// Since typescript, declare the typing of the store to be created.
type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  make42: () => void;
  // Asynchronous action
  incrementAsync: () => Promise<void>;
};

// NOTES: - When you create a zustand store, it is a custom HOOK (allows access to react features)
//          thats why it should start with 'use' on its identifier.
//        - Components will re-render on changes of this state.

// Simple State Creation.
// Parameter:
//  - initializer: Returns an object containing { initial value, ...actions }

// `Set` Function
//    - is the function used to update the state with the merging feature (see docs).
//    - can also pass a function that returns the new state and
//      have the `state` parameter to access the current values of the store.
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => {
    // The function returns the partial and `set` merges it.
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
  make42: () => {
    set({ count: 42 });
  },
  // Async Action
  incrementAsync: async () => {
    // Waits for 1.5s till going to the next line
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // call the `set` function when the async statement is completed.
    set((state) => ({ count: state.count + 1 }));
  },
}));
