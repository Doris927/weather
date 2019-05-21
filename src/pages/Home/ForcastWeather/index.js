import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import TempChart from '../TempChart';
import FormatMethods from '../common';
import { totalPage } from '../store/constants';

class ForcastWeather extends Component {
  setNextPage() {
    const { page } = this.props;
    if (page < totalPage - 1) {
      const newPage = page + 1;
      const { setPage } = this.props;
      setPage(newPage);
    }
  }

  setPrevPage() {
    const { page } = this.props;
    if (page > 0) {
      const newPage = page - 1;
      const { setPage } = this.props;
      setPage(newPage);
    }
  }

  static renderHourItem(item) {
    const dt = item.get('dt');
    const { date, day, time } = FormatMethods.dayAndDateFormat(dt);
    const main = item.getIn(['weather', '0', 'main']);
    const description = item.getIn(['weather', '0', 'description']);
    const weatherStr = FormatMethods.descriptionToJ(main, description);
    const weatherIcon = FormatMethods.getWeatherIcon(main, description);
    const windSpeed = item.getIn(['wind', 'speed']);
    const windDirection = item.getIn(['wind', 'deg']);
    const { windName } = FormatMethods.windFormat(windDirection);
    return (
      <li key={dt} className="item">
        <p className="day">{day}</p>
        <p className="date">{date}</p>
        <p className="time">{time}</p>
        <div className="ct-daytime">
          <p className="weather">{weatherStr}</p>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={weatherIcon} />
          </svg>
        </div>
        <p className="wind">{`${windName} ${Math.round(windSpeed)}m/s`}</p>
      </li>
    );
  }

  renderHoursData() {
    const { forcastData } = this.props;
    const { page } = this.props;
    const startIndex = page * 10;
    const endIndex = startIndex + 10;
    const arr = forcastData.slice(startIndex, endIndex);
    const minTemps = [];
    const maxTemps = [];
    for (const item of arr) {
      minTemps.push(Math.round(item.getIn(['main', 'temp_min'])));
      maxTemps.push(Math.round(item.getIn(['main', 'temp_max'])));
    }
    // console.log(minTemps);
    // console.log(maxTemps);
    this.setState = {
      minTemps,
      maxTemps,
    };

    return (
      <div id="ct-7-days" className="container">
        <h2 id="title">天気予報(更新/三時間)</h2>
        <div className="ct-page-ctrl">
          <span
            onClick={() => this.setPrevPage()}
            id="btn-prev"
            className="btn"
          />
          <span
            onClick={() => this.setNextPage()}
            id="btn-next"
            className="btn"
          />
        </div>
        <div id="ct-weather" className="box-content">
          <ol id="ls-weather-day" className="ls-weather">
            {arr.map((item) => {
              return ForcastWeather.renderHourItem(item);
            })}
          </ol>
          <TempChart />
        </div>
      </div>
    );
  }

  render() {
    return this.renderHoursData();
  }
}

const mapStateToProps = state => ({
  forcastData: state.getIn(['home', 'forcast']),
  page: state.getIn(['home', 'page']),
});

const mapDispatchToProps = dispatch => ({
  setPage: (page) => {
    dispatch(actionCreators.setPage(page));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForcastWeather);
