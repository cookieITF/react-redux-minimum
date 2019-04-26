import { applyMiddleware, createStore } from "redux";

const reducers = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      state = state + 1;
      break;
    case "DEC":
      state = state - 1;
      break;
  }
  return state;
};
const logger = store => next => action => {
  console.log("action fired", action);
  next(action);
};
const greeter = store => next => action => {
  console.log("Hello world", action);
  next(action);
};
const middleware = applyMiddleware(logger, greeter);
const store = createStore(reducers, 1, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });

store.dispatch({ type: "DEC" });

window.store = store;
