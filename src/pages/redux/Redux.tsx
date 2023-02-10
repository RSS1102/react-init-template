import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { addCount, decCount, incCount } from '@/redux/model/counter';
import { CounterStateType } from '@/redux/storeType';

const Redux = () => {
  const count = useAppSelector((state) => state.counterReducer.count);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>
        <button aria-label='Increment value' onClick={() => dispatch(decCount())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label='Decrement value' onClick={() => dispatch(addCount())}>
          Decrement
        </button>
        <button aria-label='Decrement value' onClick={() => dispatch(incCount({ count: 5 }))}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Redux;
