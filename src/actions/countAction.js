const increase = () => ({
  type: 'INCREMENT',
});
const decrease = () => ({
  type: 'DECREMENT',
});
const reset = () => ({
  type: 'RESET',
});
const step = value => ({
  type: 'STEP',
  payload: value,
});
export { increase, decrease, reset, step };
