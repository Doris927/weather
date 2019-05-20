import styled from 'styled-components';
import bgImg from 'images/background.jpg';
import iconImg from 'images/sprite-icons.png';

export const HomeWrapper = styled.div`
  background: #f6f9fe url(${bgImg}) no-repeat center top;
  position: relative;
  .container {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    :after {
      clear: both;
      content: '';
      display: block;
      height: 0;
    }
  }

  #ct-header {
    height: 64px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    margin-bottom: 42px;
    position: relative;
    z-index: 2;
  }
  #logo-pic {
    float: left;
    height: 37px;
    margin-top: 13px;
    display: block;
  }
  #ct-location {
    text-align: right;
    padding-top: 17px;
    height: 32px;
    vertical-align: middle;
    position: relative;
    width: 277px;
    float: right;
    #ct-show {
      display: inline-block;
      vertical-align: middle;
      margin-right: 12px;
      padding: 10px 0;
      position: relative;
    }
    #txt-cur-location {
      font-size: 16px;
      color: #fff;
      cursor: pointer;
      :before {
        content: '';
        float: left;
        height: 16px;
        width: 16px;
        background-image: url(${iconImg});
        background-position: -216px -126px;
        background-size: 234px 212px;
        margin-right: 7px;
        margin-top: 1px;
      }
    }
    #ct-hot-city {
      display: none;
      position: absolute;
      width: 277px;
      min-height: 86px;
      background: #fff;
      left: 8px;
      top: 60px;
      box-shadow: 0 0 4px 0 rgba(0,0,0,.1);
      border-radius: 5px;
      padding: 17px 0;
      color: #555;
      &.show {
        display: show;
      }
      .tit {
        text-align: left;
        font-size: 12px;
        color: #9f9f9f;
        height: 17px;
        line-height: 17px;
        margin-left: 20px;
      }
      .ls-city {
        clear: both;
        margin: 10px 2px 0 16px;
      }
      .opts {
        float: left;
        width: 25%;
        height: 28px;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        text-align: left;
        span {
          display: inline-block;
          height: 22px;
          line-height: 22px;
          padding: 0 4px;
          :hover{
            background: rgba(0, 0, 0, 0.08);
          }
        }
      }
    }
  }
  #ct-search {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    text-align: left;
    height: 30px;
    width: 277px;
    font-size: 14px;
    color: #555;
  }
  #i-location {
    border: none;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 49px;
    padding: 5px 13px;
    width: 251px;
    height: 20px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 20px;
    font-size: 14px;
  }

  #ct-current {
    position: relative;
    #txt-pub-time {
      font-size: 14px;
      color: #fff;
      opacity: 0.6;
      height: 19px;
      line-height: 19px;
      margin-bottom: 20px;
    }
    #ct-main {
      height: 86px;
      margin-bottom: 28px;
      vertical-align: bottom;
      font-size: 0;
      #txt-temperature {
        display: inline-block;
        font-size: 86px;
        color: #fff;
        height: 86px;
        line-height: 86px;
      }
      #txt-name {
        display: inline-block;
        font-size: 28px;
        color: #fff;
        line-height: 45px;
        height: 45px;
        margin-right: 24px;
      }
    }
    #ct-other {
      vertical-align: middle;
      font-size: 0;
      margin-bottom: 28px;
      .ct-other-item {
        display: inline-block;
        margin-right: 42px;
        color: #fff;
        height: 20px;
        line-height: 20px;
        font-size: 0;
        .icon {
          display: inline-block;
          height: 20px;
          width: 20px;
          vertical-align: middle;
          margin-right: 10px;
        }
        .wind {
          background-image: url(${iconImg});
          background-size: 234px 212px;
        }
        .wind-0 {
          background-position: -98px -191px;
        }
        .wind-1 {
          background-position: -75px -191px;
        }
        .wind-2 {
          background-position: -191px -50px;
        }
        .wind-3 {
          background-position: -29px -191px;
        }
        .wind-4 {
          background-position: -191px -165px;
        }
        .wind-5 {
          background-position: -167px -191px;
        }
        .wind-6 {
          background-position: -144px -191px;
        }
        .wind-7 {
          background-position: -191px -73px;
        }
        .humidity {
          background-image: url(${iconImg});
          background-position: -191px -119px;
          background-size: 234px 212px;
        }
        .pressure {
          background-image: url(${iconImg});
          background-position: -191px -96px;
          background-size: 234px 212px;
        }
        .ct-other-item-txt {
          display: inline-block;
          font-size: 18px;
          vertical-align: middle;
        }
      }
    }
    #ct-tips {
      letter-spacing: 0;
      #txt-tips {
        vertical-align: middle;
        font-size: 20px;
        color: #fff;
        line-height: 20px;
        height: 20px;
        display: inline-block;
        :before {
          content: '';
          float: left;
          height: 11px;
          width: 11px;
          margin-right: 13px;
          background: #fff;
          border-radius: 50%;
          margin-top: 5px;
        }
      }
    }
    #ct-current-weather {
      position: absolute;
      top: 78px;
      right: 80px;
      width: 150x;
      height: 150px;
      .icon {
        width: 100%;
        height: 100%;
        vertical-align: middle;
        fill: currentColor;
        overflow: hidden;
      }
    }
  }

  #ct-7-days {
    height: 400px;
    margin: 130px auto 40px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.08);
    width: 1140px;
    padding: 20px 0px;
    overflow: hidden;
    #title {
      font-size: 18px;
      color: #344665;
      height: 21px;
      line-height: 21px;
      margin-bottom: 22px;
      float: left;
      margin-right: 10px;
      margin-left: 30px;
      :before {
        content: '';
        float: left;
        height: 7px;
        width: 7px;
        overflow: hidden;
        margin-right: 10px;
        background: #344665;
        border-radius: 50%;
        margin-top: 8px;
      }
    }
    .ct-page-ctrl {
      float: right;
      margin-right: 30px;
      .btn {
        float: left;
        width: 22px;
        height: 22px;
      }
      #btn-prev {
        background-image: url(${iconImg});
        background-position: -136px -154px;
        background-size: 234px 212px;
        margin-right: 8px;
        :hover {
          background-position: -161px -154px;
        }
      }
      #btn-next {
        background-image: url(${iconImg});
        background-position: -191px 0;
        background-size: 234px 212px;
        :hover {
          background-position: -191px -25px;
        }
      }
    }
    #ct-weather {
      clear: both;
      overflow: hidden;
      position: relative;
      ol {
        list-style: none;
        overflow: hidden;
      }
      .item {
        width: 114px;
        text-align: center;
        float: left;
        background-repeat: no-repeat;
        background-position: right;
        position: relative;
        padding: 11px 0 25px;
        .day {
          font-size: 14px;
          color: #384c78;
          margin-bottom: 12px;
          height: 14px;
          line-height: 14px;
        }
        .date {
          font-size: 12px;
          color: #8a9baf;
          margin-bottom: 12px;
          height: 12px;
          line-height: 12px;
        }
        .time {
          font-size: 12px;
          color: #8a9baf;
          margin-bottom: 30px;
          height: 12px;
          line-height: 12px;
        }
        .weather {
          font-size: 14px;
          color: #384c78;
          line-height: 14px;
          height: 14px;
        }
        .icon {
          display: inline-block;
          height: 30px;
          width: 30px;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
        }
        .ct-daytime {
          .weather {
            margin-bottom: 20px;
          }
        }
        .ct-night {
          margin-top: 174px;
          margin-bottom: 24px;
          .icon {
            margin-bottom: 20px;
          }
        }
        .wind {
          margin-top: 174px;
          font-size: 12px;
          color: #8a9baf;
          line-height: 12px;
          height: 12px;
        }
      }
      #chart-days {
        width: 1140px;
        height: 174px;
        position: absolute;
        top: 170px;
      }
    }
  }

  #ct-footer {
    height: 140px;
    background: #3a4570;
    text-align: center;
    color: #fff;
    #contact-info {
      padding-top: 50px;
    }
  }
`;
