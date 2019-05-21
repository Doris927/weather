import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormatMethods from '../common';

class CurrentWeather extends Component {
  renderCurrentData() {
    const { currentData } = this.props;
    const dt = currentData.get('dt');
    const dtStr = FormatMethods.dateFormat(dt);
    const mainWeather = currentData.getIn(['weather', '0', 'main']);
    const temp = currentData.getIn(['main', 'temp']);
    const description = currentData.getIn(['weather', 'description']);
    const windSpeed = currentData.getIn(['wind', 'speed']);
    const windDirection = currentData.getIn(['wind', 'deg']);
    const { windName, windIcon } = FormatMethods.windFormat(windDirection);
    const pressure = currentData.getIn(['main', 'pressure']);
    const humidity = currentData.getIn(['main', 'humidity']);
    const weatherIcon = FormatMethods.getWeatherIcon(mainWeather, description);
    return (
      <div id="ct-current">
        <div className="container">
          <p id="txt-pub-time">Data From OpenWeatherMap {dtStr} </p>
          <div id="ct-main">
            <p id="txt-temperature">{`${Math.round(temp)}°`}</p>
            <p id="txt-name">
              {FormatMethods.descriptionToJ(mainWeather, description)}
            </p>
          </div>
          <div id="ct-other">
            <div className="ct-other-item">
              <i className={`icon wind ${windIcon}`} id="icon-wind" />
              <span className="ct-other-item-txt">
                {`${windName} ${Math.round(windSpeed)}m/s`}
              </span>
            </div>
            <div className="ct-other-item">
              <i className="icon humidity" />
              <span className="ct-other-item-txt">{`湿度 ${humidity}%`}</span>
            </div>
            <div className="ct-other-item">
              <i className="icon pressure" id="icon-wind" />
              <span className="ct-other-item-txt">{`気圧 ${pressure}hPa`}</span>
            </div>
          </div>
          <div id="ct-tips">
            <p id="txt-tips">Have a nice day!</p>
          </div>
          <div id="ct-current-weather">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref={weatherIcon} />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.renderCurrentData();
  }
}

const mapStateToProps = state => ({
  currentData: state.getIn(['home', 'current']),
});

export default connect(
  mapStateToProps,
  null
)(CurrentWeather);
