import React, { Component } from 'react';
import { HomeMobileWrapper } from './style';

class HomeMobile extends Component {
  render() {
    return (
      <HomeMobileWrapper>
        <section id="sec-main" className="container">
          <p id="txt-location">
            <span id="icon-location" />
            東京
          </p>
          <div id="ct-pub">
            <p className="txt">中央气象台 22:40发布</p>
          </div>
          <p id="txt-temperature">15</p>
          <p id="txt-weather">晴</p>
          <div id="ct-wind-humidity">
            <p className="show txt">西北风 2级</p>
            {/* <p className="txt">湿度 25%</p> */}
          </div>
          <p id="txt-tips">你若安好，便是晴天</p>
          <div className="ct-aqi">
            <p id="til">46</p>
            <p id="value">优</p>
          </div>
          <ul id="ls-warning">
            <li className="warning level01">大风预警</li>
          </ul>
        </section>
        <section id="sec-tomorrow" className="container">
          <div className="item">
            <div className="top">
              <p className="date">今天</p>
              <p className="temperature">26/11</p>
            </div>
            <div className="bottom">
              <p className="weather">晴</p>
              <img
                className="logo"
                src="https://mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/day/00.svg"
                alt="icon"
              />
            </div>
          </div>
          <div className="item">
            <div className="top">
              <p className="date">明天</p>
              <p className="temperature">26/11</p>
            </div>
            <div className="bottom">
              <p className="weather">晴</p>
              <img
                className="logo"
                src="https://mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/day/00.svg"
                alt="icon"
              />
            </div>
          </div>
        </section>
        <section id="sec-hours" className="container">
          <div id="ct-scroll">
            <ol id="ls-hours-weather">
              <li className="item">
                <p className="txt-time">22:00</p>
                <img
                  src="https://mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/night/00.svg"
                  className="icon"
                  alt="icon"
                />
                <p className="txt-degree">14</p>
              </li>
              <li className="item">
                <p className="txt-time">22:00</p>
                <img
                  src="https://mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/night/00.svg"
                  className="icon"
                  alt="icon"
                />
                <p className="txt-degree">14</p>
              </li>
              <li className="item">
                <p className="txt-time">22:00</p>
                <img
                  src="https://mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/night/00.svg"
                  className="icon"
                  alt="icon"
                />
                <p className="txt-degree">14</p>
              </li>
              <li className="item">
                <p className="txt-time">22:00</p>
                <img
                  src="https://mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/night/00.svg"
                  className="icon"
                  alt="icon"
                />
                <p className="txt-degree">14</p>
              </li>
              <li className="item">
                <p className="txt-time">22:00</p>
                <img
                  src="https://mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/night/00.svg"
                  className="icon"
                  alt="icon"
                />
                <p className="txt-degree">14</p>
              </li>
              <li className="item">
                <p className="txt-time">22:00</p>
                <img
                  src="https://mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/night/00.svg"
                  className="icon"
                  alt="icon"
                />
                <p className="txt-degree">14</p>
              </li>
              <li className="item">
                <p className="txt-time">22:00</p>
                <img
                  src="https://mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/night/00.svg"
                  className="icon"
                  alt="icon"
                />
                <p className="txt-degree">14</p>
              </li>
              <li className="item">
                <p className="txt-time">22:00</p>
                <img
                  src="https://mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/night/00.svg"
                  className="icon"
                  alt="icon"
                />
                <p className="txt-degree">14</p>
              </li>
              <li className="item">
                <p className="txt-time">22:00</p>
                <img
                  src="https://mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/night/00.svg"
                  className="icon"
                  alt="icon"
                />
                <p className="txt-degree">14</p>
              </li>
            </ol>
          </div>
        </section>
        <section id="sec-days" className="container">
          <ol id="ls-days">
            <li className="item">
              <p className="day">周六</p>
              <p className="date">05/18</p>
              <p className="weather">阴天</p>
              <img
                src="https://mat1.gtimg.com/pingjs/ext2020/weather/mobile2.0/assets/weather/night/00.svg"
                className="icon"
                alt="icon"
              />
              <p className="wind">东南风</p>
              <p className="wind">3级别</p>
            </li>
          </ol>
        </section>
        <footer id="sec-footer" className="container">
          <p id="contact-info">tammytangg@gmail.com</p>
        </footer>
        <section id="sec-location" className="container show">
          <div id="ct-search">
            <a id="btn-cancel">取消</a>
            <div id="ct-input">
              <input type="text" id="i-location" placeholder="搜索地区/景区" />
            </div>
          </div>
          <div id="ct-hot-city">
            <div id="ct-history">
              <a id="btn-clean" />
              <p className="title">历史记录</p>
              <ul className="ls-city">
                <li className="opt city">北京</li>
                <li className="opt city center">上海</li>
              </ul>
              <p className="title">热门城市</p>
              <ul className="ls-city">
                <li className="opt city">北京</li>
                <li className="opt city center">上海</li>
              </ul>
            </div>
          </div>
        </section>
      </HomeMobileWrapper>
    );
  }
}

export default HomeMobile;
