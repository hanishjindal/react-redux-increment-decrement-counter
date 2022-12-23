import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions";

export default function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Increment/Decrement counter</h1>
      <h3>using React and Redux</h3>
      <div className="quantity">
        <div
          className="quantity-minus"
          title="Decrement"
          onClick={() => dispatch(decNumber())}
        >
          <span>-</span>
        </div>
        <input
          name="quantity"
          type="text"
          className="quantity-input"
          value={myState}
        />
        <div
          className="quantity-plus"
          title="Increment"
          onClick={() => dispatch(incNumber(5))}
        >
          <span>+</span>
        </div>
      </div>
    </div>
  );
}
