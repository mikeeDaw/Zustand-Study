# Learn Zustand :/

- [Github Page](https://github.com/pmndrs/zustand)

### What is Zustand

- A simple and lightweight state management library for React and Next Apps
- For small to medium sized apps
- If app does not require extensive middleware or very complex state management.

### Features

- little boilerplate vs Redux who is boilerplate heavy
- Does not rely on a provider
- faster than context
  > Allows to specifically select a state you want to subscribe to.
- state merging by default (by using the `set` function)
  > Example <br/> > `{a:1, b:2}` and you want to only update `b` <br/>
  > Instead of: `{...state, b:7}`, <br/>
  > Its just `{b:7}` and zustand merges it automatically.
- extendable by default
  > Can use different middleware to give further functionality. You can write it urself
- little opinionated
  > The developer can decide how to interact with the store. Giving more options

### Setting Up

- `npm i zustand`

## Steps / Topics

- Create a "Store" - `store.tsx`
- Using the store - `App.tsx`
- Selector Function - `App.tsx`
- Using Actons - `CountingMachine.tsx`
- Updating the State - `store.tsx`
- Async Actions - `store.tsx` & `CountingMachine.tsx`
- Using the Store outside components
