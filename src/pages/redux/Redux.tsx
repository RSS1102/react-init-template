import { Add, Dec, incrementByAmount } from "@/Redux/model/counter";
import { counterType } from "@/Redux/storeTpye";
import { useDispatch, useSelector } from "react-redux";

const Redux = () => {
  const count = useSelector((state: counterType) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(Dec())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(Add())}>
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(3))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Redux;
