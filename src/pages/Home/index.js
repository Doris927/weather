import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentWeather from './CurrentWeather';
import ForcastWeather from './ForcastWeather';
import { HomeWrapper } from './style';
import 'iconfont/iconfont';
import actionCreators from './store/actionCreators';
import { cityNameToID, cityIDToName } from './store/constants';

class Home extends Component {
  constructor(props) {
    super(props);
    const { fetchData, fetchForcastData, cityID } = this.props;
    fetchData(cityID);
    fetchForcastData(cityID);
    this.hideWindow = () => {
      console.log('test');
      const { showWindow, handleShowWindow } = this.props;
      if (showWindow) handleShowWindow(false);
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.hideWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.hideWindow);
  }

  showHotCityWindow(e) {
    e.nativeEvent.stopImmediatePropagation();
    const { handleShowWindow, showWindow } = this.props;
    if (!showWindow) handleShowWindow(true);
  }

  handleSelectCity(cityName) {
    console.log('cityName', cityName);
    const { cityID, selectCity } = this.props;
    const selectedCity = cityNameToID.get(cityName);
    if (selectCity !== cityID) {
      selectCity(selectedCity);
    }
  }

  renderHotCityWindow() {
    const { showWindow } = this.props;
    if (!showWindow) {
      return;
    }
    const hotCities = ['東京', '横浜', '京都', '大阪', '札幌', '名古屋'];
    return (
      <div id="ct-hot-city">
        <p className="tit">人気な所</p>
        <ul id="ls-hot-city" className="ls-city">
          {hotCities.map(item => (
            <li key={item} className="opts">
              <span onClick={() => this.handleSelectCity(item)}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { cityID } = this.props;
    const cityName = cityIDToName.get(cityID);
    return (
      <HomeWrapper>
        <div id="ct-header">
          <div className="container">
            <span id="logo-pic">OpenWeather</span>
            <div id="ct-location">
              <div id="ct-show" onClick={e => this.showHotCityWindow(e)}>
                <p id="txt-cur-location">{cityName}</p>
              </div>
              {this.renderHotCityWindow()}
            </div>
          </div>
        </div>
        <CurrentWeather />
        <ForcastWeather />
        <div id="ct-footer">
          <p id="contact-info"> tammytangg@gmail.com</p>
        </div>
      </HomeWrapper>
    );
  }
}

const mapStateToProps = state => ({
  currentData: state.getIn(['home', 'current']),
  forcastData: state.getIn(['home', 'forcast']),
  page: state.getIn(['home', 'page']),
  hotCities: state.getIn(['home', 'hotCities']),
  showWindow: state.getIn(['home', 'showWindow']),
  cityID: state.getIn(['home', 'cityID']),
});

const mapDispatchToProps = dispatch => ({
  fetchData: (cityID) => {
    dispatch(actionCreators.getCurrentData(cityID));
  },
  fetchForcastData: (cityID) => {
    dispatch(actionCreators.getForcastData(cityID));
  },
  handleShowWindow: (showWindow) => {
    // console.log('showWindow', showWindow);
    dispatch(actionCreators.handleShowWindow(showWindow));
  },
  selectCity: (cityID) => {
    dispatch(actionCreators.selectCity(cityID));
    dispatch(actionCreators.getCurrentData(cityID));
    dispatch(actionCreators.getForcastData(cityID));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
