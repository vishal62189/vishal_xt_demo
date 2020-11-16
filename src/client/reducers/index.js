import { combineReducers } from 'redux';
import missionsReducer from './missionsReducer';

export default combineReducers({
  missionsData: missionsReducer
});
