import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, reset, step } from './actions/countAction';
import './App.css';

// const reduxState = useSelector(state => state);
// console.log(reduxState);

function App() {
  const [value, setValue] = useState(0);
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div style={{ margin: '4rem' }}>
      <h1>Counter App</h1>
      <h2>{count.current}</h2>
      <input
        type='text'
        placeholder='Enter Step'
        value={value}
        onChange={e => setValue(+e.target.value)}
      />
      {/*
      dispatch({type: 'STEP', payload: value});
      */}
      <button
        onClick={() => {
          dispatch(step(value));
        }}>
        Step
      </button>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
