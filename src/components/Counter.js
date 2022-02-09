import { useContext } from "react"
import { StoreContext } from "../context/context";
import { increment, decrement, reset } from "../store/actions";

export const Counter = () => {
  const { count, dispatch } = useContext(StoreContext);

  const handleClick = (actions) => {
    dispatch(actions);
  }
  return (
    <div className="counter">
      <button className="btn" onClick={() => handleClick(increment(1))}>+1</button>
      <span>{count}</span>
      <button className="btn" onClick={() => handleClick(decrement(1))}>-1</button>
      <button onClick={() => handleClick(reset(0))}>reset</button>
    </div>
  )
}