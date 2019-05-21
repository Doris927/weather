import axios from 'axios';
import actionTypes from './actionTypes';
import { appID, apis } from './constants';

const getCurrentWeather = data => ({
  type: actionTypes.GET_CURRENT,
  data,
});

const getForcastWeather = data => ({
  type: actionTypes.GET_FORCAST,
  data,
});

const selectCity = cityID => ({
  type: actionTypes.SELECT_CITY,
  cityID,
});

const handleShowWindow = showWindow => ({
  type: actionTypes.SHOW_WINDOW,
  showWindow,
});

const setPage = page => ({
  type: actionTypes.SET_PAGE,
  page,
});

const getCurrentData = cityID => (dispatch) => {
  const url = `${apis.current}&id=${cityID}&appid=${appID}`;
  axios({
    method: 'get',
    url,
  }).then((resp) => {
    const { data } = resp;
    console.log(data);
    dispatch(getCurrentWeather(data));
  });
};

const getForcastData = cityID => (dispatch) => {
  const url = `${apis.forcast}&id=${cityID}&appid=${appID}`;
  axios({
    method: 'get',
    url,
  }).then((resp) => {
    const { data } = resp;
    console.log(data.list);
    dispatch(getForcastWeather(data.list));
  });
};

export default {
  getCurrentData,
  getForcastData,
  setPage,
  handleShowWindow,
  selectCity,
};

// export default { changeTab };
