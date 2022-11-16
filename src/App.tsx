import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './slices';

function App() {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
