import React, { Component } from 'react';
import { connect } from 'react-redux';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import logoPic from 'images/logo.png';
import { HomeWrapper } from './style';
import 'iconfont/iconfont';
import actionCreators from './store/actionCreators';
import {
  mapIcons,
  mapMainIcons,
  mapE2J,
  mapMainWeather,
  totalPage,
  // cityNameToID,
} from './store/constants';

class Home extends Component {
  static add0(m) {
    return m < 10 ? `0${m}` : m;
  }

  static dateFormat(timestamp) {
    const time = new Date(timestamp * 1000); // 先将时间戳转为Date对象，然后才能使用Date的方法
    const year = time.getFullYear();
    const month = time.getMonth() + 1; // 月份是从0开始的
    const day = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();
    // add0()方法在后面定义
    return `${year}-${Home.add0(month)}-${Home.add0(day)} ${Home.add0(
      hour
    )}:${Home.add0(minute)}`;
  }

  static dayAndDateFormat(timestamp) {
    const time = new Date(timestamp * 1000); // 先将时间戳转为Date对象，然后才能使用Date的方法
    const month = time.getMonth() + 1; // 月份是从0开始的
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const dayStrArr = [
      '月曜日',
      '火曜日',
      '水曜日',
      '木曜日',
      '金曜日',
      '土曜日',
      '日曜日',
    ];
    // add0()方法在后面定义
    return {
      date: `${month}月${date}日`,
      day: dayStrArr[day - 1],
      time: `${Home.add0(hour)}:${Home.add0(minute)}`,
    };
  }

  static tempFormat(temp) {
    return Math.round(temp);
  }

  static windFormat(degree) {
    const windNames = [
      '北風',
      '東北風',
      '東風',
      '東南風',
      '南風',
      '西南風',
      '西風',
      '西北風',
    ];
    const windType = Math.trunc((degree + 22.5) / 45);
    return {
      windName: windNames[windType],
      windIcon: `wind-${windType}`,
    };
  }

  static descriptionToJ(main, description) {
    if (mapE2J.has(description)) {
      return mapE2J.get(description);
    } else {
      return mapMainWeather.get(main);
    }
  }

  static getWeatherIcon(main, description) {
    if (mapIcons.has(description)) {
      return mapIcons.get(description);
    } else {
      return mapMainIcons.get(main);
    }
  }

  constructor(props) {
    super(props);
    const { fetchData, fetchForcastData } = this.props;
    fetchData();
    fetchForcastData();
    this.state = {
      maxTemps: [],
      minTemps: [],
      showWindow: false,
    };
    console.log(this.state);
  }

  componentDidUpdate() {
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
    console.log(minTemps);
    console.log(maxTemps);
    // this.setState = {
    //   minTemps,
    //   maxTemps,
    // };
    // const minTemps = this.state;
    // const maxTemps = this.state;
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('chart-days'));
    // 绘制图表
    myChart.setOption({
      xAxis: {
        show: false,
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        type: 'category',
        boundaryGap: false,
      },
      yAxis: {
        show: false,
        min: 'dataMin',
        max: 'dataMax',
      },
      series: [
        {
          data: minTemps,
          type: 'line',
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: {
            color: '#96cdf7',
            width: 3,
          },
          itemStyle: {
            color: '#96cdf7',
            borderColor: '#96cdf7',
          },
          label: {
            show: true,
            color: '#384c78',
            fontSize: 18,
            formatter: '{@degree}°',
            lineHeight: 40,
          },
        },
      ],
      grid: {
        x: 50,
        y: 50,
        x2: 50,
        y2: 50,
      },
    });
  }

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

  renderCurrentData() {
    const { currentData } = this.props;
    // console.log(currentData);
    const dt = currentData.get('dt');
    // console.log(dt);
    const dtStr = Home.dateFormat(dt);
    const mainWeather = currentData.getIn(['weather', '0', 'main']);
    // console.log('main', mainWeather);
    const temp = currentData.getIn(['main', 'temp']);
    const description = currentData.getIn(['weather', 'description']);
    const windSpeed = currentData.getIn(['wind', 'speed']);
    const windDirection = currentData.getIn(['wind', 'deg']);
    const { windName, windIcon } = Home.windFormat(windDirection);
    const pressure = currentData.getIn(['main', 'pressure']);
    const humidity = currentData.getIn(['main', 'humidity']);
    const weatherIcon = Home.getWeatherIcon(mainWeather, description);
    // console.log('wind degree', windDirection);
    return (
      <div id="ct-current">
        <div className="container">
          <p id="txt-pub-time">Data From OpenWeatherMap {dtStr} </p>
          <div id="ct-main">
            <p id="txt-temperature">{`${Math.round(temp)}°`}</p>
            <p id="txt-name">{Home.descriptionToJ(mainWeather, description)}</p>
            {/* <div id="ct-aqi" className="air-level3">
              <p className="info-aqi">130 轻度污染</p>
            </div> */}
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

  static renderHourItem(item) {
    const dt = item.get('dt');
    const { date, day, time } = Home.dayAndDateFormat(dt);
    console.log('date', date);
    console.log('day', day);
    console.log('time', time);
    const main = item.getIn(['weather', '0', 'main']);
    const description = item.getIn(['weather', '0', 'description']);
    console.log('main', main);
    console.log('description', description);
    const weatherStr = Home.descriptionToJ(main, description);
    const weatherIcon = Home.getWeatherIcon(main, description);
    const windSpeed = item.getIn(['wind', 'speed']);
    const windDirection = item.getIn(['wind', 'deg']);
    const { windName } = Home.windFormat(windDirection);
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
    console.log(minTemps);
    console.log(maxTemps);
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
              return Home.renderHourItem(item);
            })}
          </ol>
          <div id="chart-days">test</div>
        </div>
      </div>
    );
  }

  static renderHotCities() {
    const hotCities = ['東京', '横浜', '京都', '大阪', '札幌', '名古屋'];
    return (
      <div id="ct-hot-city">
        <p className="tit">人気な所</p>
        <ul id="ls-hot-city" className="ls-city">
          {
            hotCities.map(item => (
              <li className="opts">
                <span>{item}</span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }

  showSelectWindow() {

  }

  render() {
    return (
      <HomeWrapper>
        <div id="ct-header">
          <div className="container">
            <img src={logoPic} alt="logo" id="logo-pic" />
            <div id="ct-location">
              <div id="ct-show" onClick={() => this.showSelectWindow()}>
                <p id="txt-cur-location">東京</p>
              </div>
              {Home.renderHotCities()}
            </div>
          </div>
        </div>
        {this.renderCurrentData()}
        {this.renderHoursData()}
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
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(actionCreators.getCurrentData(1850147));
  },
  fetchForcastData: () => {
    dispatch(actionCreators.getForcastData(1850147));
  },
  setPage: (page) => {
    dispatch(actionCreators.setPage(page));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
