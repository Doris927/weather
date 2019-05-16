import React, { Component } from 'react';
import logoPic from 'images/logo.png';
import sunnyPic from 'images/sunny.png';
import sunnySPic from 'images/sunny-small.png';
import { HomeWrapper } from './style';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <div id="ct-header">
          <div className="container">
            <img src={logoPic} alt="logo" id="logo-pic" />
            <div id="ct-location">
              <div id="ct-show">
                <p id="txt-cur-location">北京</p>
              </div>
              <div id="ct-search">
                <input type="input" id="i-location" placeholder="search" />
              </div>
            </div>
          </div>
        </div>
        <div id="ct-current">
          <div className="container">
            <p id="txt-pub-time">中央气象台 11:40 发布</p>
            <div id="ct-main">
              <p id="txt-temperature">29°</p>
              <p id="txt-name">晴</p>
              <div id="ct-aqi" className="air-level3">
                <p className="info-aqi">130 轻度污染</p>
              </div>
            </div>
            <div id="ct-other">
              <div className="ct-other-item">
                <i className="icon wind-4" id="icon-wind" />
                <span className="ct-other-item-txt">南风 2级</span>
              </div>
              <div className="ct-other-item">
                <i className="icon wind-4" id="icon-wind" />
                <span className="ct-other-item-txt">南风 2级</span>
              </div>
              <div className="ct-other-item">
                <i className="icon wind-4" id="icon-wind" />
                <span className="ct-other-item-txt">南风 2级</span>
              </div>
            </div>
            <div id="ct-tips">
              <p id="txt-tips">现在的温度比较舒适。</p>
            </div>
            <div id="ct-current-weather">
              <img src={sunnyPic} alt="sunny" />
            </div>
          </div>
        </div>
        <div className="container" id="ct-hours">
          <h2 id="title">逐小时预报</h2>
          <a id="txt-source" href="#" target="_blank">数据来源于中国天气网</a>
          <div className="ct-page-ctrl">
            <a id="btn-prev" className="btn" href="#" target="_blank" />
            <a id="btn-next" className="btn" href="#" target="_blank" />
          </div>
          <div id="ct-hours-info">
            <ol id="ls-ct-hours-info">
              <li className="li-ct-hour">
                <p className="txt-time">11:00</p>
                <img src={sunnySPic} alt="sunny" className="icon" />
                <p className="txt-degree">27°</p>
              </li>
              <li className="li-ct-hour">
                <p className="txt-time">11:00</p>
                <img src={sunnySPic} alt="sunny" className="icon" />
                <p className="txt-degree">27°</p>
              </li>
            </ol>
          </div>
        </div>
        <div className="container" id="ct-bottom">
          <div id="ct-7-days">
            <a id="link-15-days" href="#" target="_blank">15日天气预报</a>
            <h2 id="title">7日天气预报</h2>
            <div id="ct-weather" className="box-content">
              <ol id="ls-weather-day" className="ls-weather">
                <li className="item first">
                  <p className="day">昨天</p>
                  <p className="date">05月15日</p>
                  <div className="ct-daytime">
                    <p className="weather">晴</p>
                    <img className="icon" src={sunnySPic}/>
                  </div>
                  <div className="ct-night">
                    <img className="icon" src={sunnySPic}/>
                    <p className="weather">晴</p>
                  </div>
                  <p className="wind">西风 3级</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </HomeWrapper>
    );
  }
}

export default Home;
