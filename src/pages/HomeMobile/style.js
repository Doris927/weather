import styled from 'styled-components';

function px2rem(pxValue) {
  const rem = 37.5;
  return `${pxValue / rem}rem`;
}

export const HomeMobileWrapper = styled.div`
  div,
  footer,
  li,
  ol,
  p,
  section,
  ul {
    box-sizing: border-box;
  }

  .container {
    display: block;
    max-width: 500px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  #sec-main {
    height: ${px2rem(340)};
    background-image: linear-gradient(-90deg, #3bbcff, #4af4ff);
    background-image: -webkit-linear-gradient(-90deg, #3bbcff, #4af4ff);
    overflow: hidden;
    position: relative;
    text-align: center;
    #txt-location {
      height: ${px2rem(16)};
      line-height: ${px2rem(16)};
      width: 76%;
      margin: ${px2rem(18)} 12% ${px2rem(6)};
      font-size: ${px2rem(16)};
      color: #fff;
    }
    #ct-pub {
      height: ${px2rem(18)};
      padding-bottom: 10px;
      display: block;
      .txt {
        opacity: 1;
        font-size: ${px2rem(12)};
        color: #fff;
        height: ${px2rem(12)};
        line-height: ${px2rem(12)};
      }
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    }
    #txt-temperature {
      font-size: ${px2rem(62)};
      color: #fff;
      line-height: ${px2rem(62)};
      height: ${px2rem(62)};
      margin-top: ${px2rem(66)};
      position: relative;
    }
    #txt-weather {
      font-size: ${px2rem(22)};
      color: #fff;
      line-height: ${px2rem(22)};
      height: ${px2rem(22)};
      margin-top: ${px2rem(8)};
    }
    #ct-wind-humidity {
      margin-top: ${px2rem(10)};
      height: ${px2rem(14)};
      position: relative;
      .txt {
        height: ${px2rem(14)};
        line-height: ${px2rem(14)};
        font-size: ${px2rem(14)};
        color: #fff;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
        animation-duration: 0.75s;
        -webkit-animation-duration: 0.75s;
        animation-name: wind-hide;
        -webkit-animation-name: wind-hide;
      }
    }
    #txt-tips {
      font-size: ${px2rem(16)};
      color: #fff;
      line-height: ${px2rem(16)};
      height: ${px2rem(16)};
      margin: ${px2rem(50)} ${px2rem(60)} 0;
      position: relative;
    }
    .ct-aqi {
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
      height: ${px2rem(30)};
      padding: ${px2rem(8)} ${px2rem(12)};
      position: absolute;
      border-radius: ${px2rem(8)};
      top: ${px2rem(67)};
      left: ${px2rem(8)};
      background: #ffbf62;
      z-index: 2;
      #til {
        opacity: 0.8;
        font-size: ${px2rem(12)};
        color: #fff;
        line-height: ${px2rem(12)};
        height: ${px2rem(12)};
        margin-bottom: ${px2rem(3)};
      }
      #value {
        margin-top: ${px2rem(2)};
        font-size: ${px2rem(12)};
        color: #fff;
        height: ${px2rem(14)};
        line-height: ${px2rem(14)};
      }
    }
    #ls-warning {
      position: absolute;
      top: ${px2rem(67)};
      right: 0;
      text-align: right;
      line-height: 0;
      z-index: 2;
      .warning {
        padding: 0 ${px2rem(6)};
        font-size: ${px2rem(12)};
        color: #fff;
        height: ${px2rem(24)};
        line-height: ${px2rem(24)};
        border-bottom-left-radius: ${px2rem(12)};
        border-top-left-radius: ${px2rem(12)};
        margin-bottom: ${px2rem(12)};
        background: rgba(0, 0, 0, 0.3);
        text-align: left;
        overflow: hidden;
        float: right;
        clear: both;
        :before {
          content: '';
          display: inline-block;
          height: ${px2rem(5)};
          width: ${px2rem(5)};
          border-radius: 50%;
          vertical-align: middle;
          margin-right: ${px2rem(3)};
          background-color: #7da0ec;
        }
      }
    }
  }

  #sec-tomorrow {
    background: #fff;
    height: ${px2rem(103)};
    padding-top: ${px2rem(26)};
    border-bottom: 1px solid #e4e4e4;
    margin-bottom: ${px2rem(10)};
    position: relative;
    .item {
      box-sizing: border-box;
      float: left;
      width: 50%;
      height: ${px2rem(52)};
      font-size: ${px2rem(14)};
      color: #434343;
      line-height: ${px2rem(14)};
      padding: 0 ${px2rem(20)};
      .top {
        height: ${px2rem(12)};
        margin-bottom: ${px2rem(13)};
        .date {
          float: left;
          float: right;
        }
      }
      .bottom {
        height: ${px2rem(22)};
        .weather {
          float: left;
          height: ${px2rem(22)};
          line-height: ${px2rem(22)};
        }
        .logo {
          float: right;
          height: ${px2rem(22)};
          width: ${px2rem(22)};
        }
        :after {
          content: '';
          position: absolute;
          width: 1px;
          height: ${px2rem(52)};
          background-color: #f0f0f0;
          left: 50%;
          top: ${px2rem(26)};
        }
      }
    }
  }

  #sec-hours {
    height: ${px2rem(136)};
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    margin-bottom: ${px2rem(10)};
    padding-top: ${px2rem(30)};
    #ct-scroll {
      width: 400%;
    }
    #ls-hours-weather {
      width: 100%;
    }
    .item {
      float: left;
      width: 3.8%;
      text-align: center;
      position: relative;
      .txt-time {
        font-size: 12px;
        line-height: 12px;
        height: 12px;
        color: #999;
      }
      .icon {
        height: 24px;
        width: 24px;
        display: block;
        margin: 15px auto;
      }
      .txt-degree {
        font-size: 14px;
        color: #434343;
        line-height: 14px;
        height: 14px;
        position: relative;
      }
    }
  }

  #sec-days {
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
    height: 200px;
    padding-top: 25px;
    padding-bottom: 25px;
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    .item {
      width: 62.5px;
      float: left;
      text-align: center;
      .day {
        font-size: 12px;
        color: #999;
        line-height: 12px;
        height: 12px;
      }
      .date {
        margin: 5px 0 15px;
        font-size: 12px;
        color: #999;
        line-height: 12px;
        height: 12px;
      }
      .weather {
        margin-bottom: 14px;
        font-size: 14px;
        color: #434343;
        line-height: 14px;
        height: 14px;
      }
      .icon {
        width: 24px;
        height: 24px;
        display: block;
        margin: 0 auto;
      }
      .wind {
        font-size: 12px;
        color: #b2b2b2;
        line-height: 12px;
        height: 12px;
        width: 40px;
        margin: 10px auto 6px;
        overflow: hidden;
      }
    }
  }
  #sec-footer {
    font-size: 12px;
    padding: 15px 0;
    text-align: center;
    color: #b2b2b2;
    #contact-info {
      height: 26px;
      line-height: 26px;
    }
  }

  #sec-location {
    display: none;
    &.show {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    -webkit-transform: translate3d(0, -120%, 0);
    transform: translate3d(0, -120%, 0);
    -webkit-transition: transform 0.25s ease-in-out;
    transition: transform 0.25s ease-in-out;

    #ct-search {
      height: 45px;
      padding: 7px 0;
      border-bottom: 1px solid #eee;
      position: relative;
      display: none;
      #btn-cancel {
        float: right;
        font-size: 14px;
        color: #434343;
        width: 60px;
        line-height: 30px;
        text-align: center;
      }
      #ct-input {
        margin-right: 60px;
        margin-left: 13px;
        #i-location {
          width: 100%;
          height: 30px;
          padding: 5px 0 5px 32px;
          box-sizing: border-box;
          line-height: 24px;
          background: #f2f2f2;
          border-radius: 44px;
          font-size: 14px;
          color: #434343;
          -webkit-appearance: none;
          border-width: 0;
          vertical-align: top;
        }
      }
    }
    #ct-hot-city {
      padding: 12px 13px 7px;
      position: absolute;
      top: 45px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: auto;
      .title {
        float: left;
        font-size: 16px;
        color: #434343;
        height: 22px;
        line-height: 20px;
        margin: 10px 0;
      }
      #btn-clean {
        float: right;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiP…48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);
        background-size: 17px 17px;
        height: 17px;
        width: 17px;
        margin-top: 21px;
      }
      .ls-city {
        clear: both;
        &:after {
          content: '';
          display: block;
          height: 0;
          clear: both;
        }
      }
      .opt {
        box-sizing: border-box;
        background: #f2f2f2;
        border-radius: 44px;
        padding: 0 16px;
        width: 32%;
        height: 32px;
        line-height: 32px;
        margin-bottom: 12px;
        font-size: 14px;
        color: #434343;
        text-align: center;
        float: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &.center {
          margin-left: 2%;
          margin-right: 2%;
        }
      }
    }
  }
`;
