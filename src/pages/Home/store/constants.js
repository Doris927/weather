const mapIcons = new Map();
mapIcons.set('clear sky daytime', '#icon-qingtianbaitian');
mapIcons.set('clear sky night', '#icon-qingtianyewan');
mapIcons.set('overcast clouds', '#icon-yintian');
mapIcons.set('broken clouds daytime', '##icon-qingzhuanduoyunbaitian');
mapIcons.set('broken clouds night', '#icon-qingzhuanduoyunyewan');
mapIcons.set('light rain', '#icon-xiaoyu');
mapIcons.set('moderate rain', '#icon-zhongyu');
mapIcons.set('shower rain', '#icon-dayu');
mapIcons.set('sunrise', '#icon-richu');
mapIcons.set('sunset', '#icon-rila');

const mapMainIcons = new Map();
mapMainIcons.set('Clear', '#icon-qingtianbaitian');
mapMainIcons.set('Rain', '#icon-zhongyu');
mapMainIcons.set('Clouds', '#icon-yintian');

const cityNameToID = new Map();
cityNameToID.set('東京', 1850147);
cityNameToID.set('横浜', 1848354);
cityNameToID.set('京都', 1857910);
cityNameToID.set('大阪', 1853909);
cityNameToID.set('札幌', 2128295);
cityNameToID.set('名古屋', 1856057);

const appID = '4f21bb55b293bbd43578ce4c4d11ff6f';

const apis = {
  current: 'http://api.openweathermap.org/data/2.5/weather?units=metric',
  forcast: 'http://api.openweathermap.org/data/2.5/forecast?units=metric',
};

const mapE2J = new Map();
mapE2J.set('clear sky', '晴れ');
mapE2J.set('overcast clouds', '曇り');
mapE2J.set('broken clouds', '晴時々曇');
mapE2J.set('light rain', '弱雨');
mapE2J.set('moderate rain', '雨');
mapE2J.set('shower rain', '強雨');
mapE2J.set('surise', '日出');
mapE2J.set('sunset', '日暮れ');

const mapMainWeather = new Map();
mapMainWeather.set('Clear', '晴れ');
mapMainWeather.set('Rain', '雨');
mapMainWeather.set('Clouds', '曇り');

const totalPage = 4;

export {
  mapIcons,
  mapMainIcons,
  cityNameToID,
  appID,
  apis,
  mapE2J,
  mapMainWeather,
  totalPage,
};
