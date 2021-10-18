// (state,action)
const countReducer = (state = { current: 0 }, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        current: state.current + 1,
      };
    }

    case 'DECREMENT': {
      return {
        ...state,
        current: state.current > 0 ? state.current - 1 : 0,
      };
    }
    case 'RESET': {
      return {
        ...state,
        current: 0,
      };
    }
    case 'STEP': {
      return {
        ...state,
        current: state.current + action.payload,
      };
    }
    default:
      return state;
  }
};

export default countReducer;
