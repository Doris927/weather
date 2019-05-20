import { createGlobalStyle } from 'styled-components';

export const IconFontGlobal = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1558329833050'); /* IE9 */
    src: url('./iconfont.eot?t=1558329833050#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1558329833050') format('woff'),
    url('./iconfont.ttf?t=1558329833050') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1558329833050#iconfont') format('svg'); /* iOS 4.1- */
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-qingtianbaitian:before {
    content: "\e627";
  }

  .icon-qingtianyewan:before {
    content: "\e628";
  }

  .icon-yintian:before {
    content: "\e629";
  }

  .icon-qingzhuanduoyunbaitian:before {
    content: "\e62a";
  }

  .icon-qingzhuanduoyunyewan:before {
    content: "\e62b";
  }

  .icon-duoyunzhuanyubaitian:before {
    content: "\e62c";
  }

  .icon-duoyunzhuanyuyewan:before {
    content: "\e62d";
  }

  .icon-shandian:before {
    content: "\e62e";
  }

  .icon-xiaoyu:before {
    content: "\e62f";
  }

  .icon-zhongyu:before {
    content: "\e630";
  }

  .icon-dayu:before {
    content: "\e631";
  }

  .icon-baoyu:before {
    content: "\e632";
  }

  .icon-leizhenyu:before {
    content: "\e633";
  }

  .icon-dongyu:before {
    content: "\e634";
  }

  .icon-bingbao:before {
    content: "\e635";
  }

  .icon-yujiaxue:before {
    content: "\e636";
  }

  .icon-xiaoxue:before {
    content: "\e637";
  }

  .icon-zhongxue:before {
    content: "\e638";
  }

  .icon-daxue:before {
    content: "\e639";
  }

  .icon-baoxue:before {
    content: "\e63a";
  }

  .icon-wu:before {
    content: "\e63b";
  }

  .icon-wumai:before {
    content: "\e63c";
  }

  .icon-yangchen:before {
    content: "\e63d";
  }

  .icon-feng:before {
    content: "\e63e";
  }

  .icon-shachen:before {
    content: "\e63f";
  }

  .icon-longjuanfeng:before {
    content: "\e640";
  }

  .icon-richu:before {
    content: "\e641";
  }

  .icon-rila:before {
    content: "\e642";
  }
`;
