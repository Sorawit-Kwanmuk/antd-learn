import { combineReducers } from 'redux';
import countReducer from './countReducer';

//รวม reducer มารวมกัน
export default combineReducers({
  count: countReducer,
  //   auth: authReducer,
  //   cart: cartReducer,
});
