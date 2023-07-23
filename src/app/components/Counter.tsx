import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { increment, decrement } from '@/redux/features/counterSlice';

function Counter() {
  const count = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useAppDispatch();

  return (
    <div className='flex justify-around items-center m-auto w-1/3 '>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <h1 className='text-3xl m-6'>Total: {count}</h1>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
