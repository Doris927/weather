import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { reducer as homeReducer } from 'pages/Home/store';
// import { reducer as homeReducer } from '../common/Home/store';
// import { reducer as ordersReducer } from '../common/Order/store';

const rootReducer = history => combineReducers({
  home: homeReducer,
  router: connectRouter(history),
});

export default rootReducer;
