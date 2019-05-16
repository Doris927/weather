import styled from 'styled-components';
import bgImg from 'images/background.jpg';
import iconImg from 'images/sprite-icons.png';

export const HomeWrapper = styled.div`
  background: #f6f9fe url(${bgImg}) no-repeat center top;
  position: relative;
  .container {
    position:relative;
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
      #ct-aqi {
        display: inline-block;
        position: relative;
        margin-right: 24px;
        cursor: pointer;
        .info-aqi {
          background-color: #f1ab62;
        }
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
        .wind-4 {
          background-image: url(${iconImg});
          background-position: -98px -191px;
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
        width: 134px;
        height: 134px;
        img {
            height: 134px;
            width: 134px;
        }
    }
  }

  #ct-hours {
      height: 143px;
      margin: 130px auto 40px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.08);
      width: 1140px;
      padding: 20px 30px 27px;
      overflow: hidden;
      #title {
          font-size: 18px;
          color: #344665;
          height: 21px;
          line-height: 21px;
          margin-bottom: 22px;
          float: left;
          margin-right: 10px;
          :before {
              content: "";
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
      #txt-source {
          float: left;
          font-size: 12px;
          color: #8a9baf;
          height: 21px;
          line-height: 21px;
          text-decoration: none;
      }
      .ct-page-ctrl {
          float: right;
          .btn {
              float:left;
              width: 22px;
              height: 22px;
          }
          #btn-prev {
              background-image: url(${iconImg});
              background-position: -136px -154px;
              background-size: 234px 212px;
              margin-right: 8px;
          }
          #btn-next {
              background-image: url(${iconImg});
              background-position: -191px 0;
              background-size: 234px 212px
          }
      }
      #ct-hours-info {
          clear: both;
          width: 4800px;
          transition: margin 1s ease-in-out;
          .li-ct-hour {
              float: left;
              width: 40px;
              margin-right: 60px;
              text-align: center;
              background-repeat: no-repeat;
              background-position: right;
              position: relative;
              .txt-time {
                  font-size: 14px;
                  color: #8a9baf;
                  line-height: 14px;
                  height: 14px;
                  margin-bottom: 24px;
              }
              .icon {
                  display: block;
                  height: 30px;
                  width: 30px;
                  margin: 0 auto;
                  margin-bottom: 18px;
              }
              .txt-degree {
                  font-size: 18px;
                  color: #384c78;
                  line-height: 14px;
              }
          }
      }
  }

  #ct-bottom {
      margin-bottom: 35px;
      #ct-7-days {
          float: left;
          width: 740px;
          height: 492px;
          padding: 20px 0 0;
          border-radius: 10px;
          background-color: #fff;
          box-shadow: 0 0 14px rgba(0, 0, 0, 0.08);
          #link-15-days {
              float: right;
              background: #f8faff;
              border: 1px solid #dce5f0;
              border-radius: 37px;
              font-size: 12px;
              color: #384c78;
              line-height: 26px;
              height: 26px;
              width: 100px;
              text-align: center;
              margin-right: 30px;
              text-decoration: none;
          }
      }
  }
`;
