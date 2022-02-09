import { DECREMENT, INCREMENT, RESET } from "./actionsType";

export const initialState = { count: 0 };

export const reducer = (state, actions) => {
  switch (actions.type) {
    case INCREMENT:
      return { count: state.count + actions.payload }
    case DECREMENT:
      return { count: state.count - actions.payload }
    case RESET:
      return { count: actions.payload }
  }
}