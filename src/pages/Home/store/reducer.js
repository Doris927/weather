import { fromJS } from 'immutable';
import actionTypes from './actionTypes';

const defaultState = fromJS({
  current: {},
  forcast: [],
  page: 0,
  hotCities: fromJS(['東京', '横浜', '京都', '大阪', '札幌', '名古屋']),
  showWindow: false,
  cityID: 1850147,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT:
      return state.set('current', fromJS(action.data));
    case actionTypes.GET_FORCAST:
      return state.set('forcast', fromJS(action.data));
    case actionTypes.SET_PAGE:
      return state.set('page', action.page);
    case actionTypes.SHOW_WINDOW:
      return state.set('showWindow', action.showWindow);
    case actionTypes.SELECT_CITY:
      return state.set('cityID', action.cityID);
    default:
      return state;
  }
};
