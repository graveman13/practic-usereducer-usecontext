import { DECREMENT, INCREMENT, RESET } from "./actionsType";

export const increment = (payload) => ({
  type: INCREMENT,
  payload,
});

export const decrement = (payload) => ({
  type: DECREMENT,
  payload,
});

export const reset = (payload) => ({
  type: RESET,
  payload,
});