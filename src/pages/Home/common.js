import {
  mapIcons,
  mapMainIcons,
  mapE2J,
  mapMainWeather,
} from './store/constants';

/**
 * データ処理関数
 */

const add0 = (m) => {
  return m < 10 ? `0${m}` : m;
};

const dateFormat = (timestamp) => {
  const time = new Date(timestamp * 1000); // 先将时间戳转为Date对象，然后才能使用Date的方法
  const year = time.getFullYear();
  const month = time.getMonth() + 1; // 月份是从0开始的
  const day = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();
  // add0()方法在后面定义
  return `${year}-${add0(month)}-${add0(day)} ${add0(hour)}:${add0(minute)}`;
};

const dayAndDateFormat = (timestamp) => {
  const time = new Date(timestamp * 1000); // 先将时间戳转为Date对象，然后才能使用Date的方法
  const month = time.getMonth() + 1; // 月份是从0开始的
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const dayStrArr = [
    '日曜日',
    '月曜日',
    '火曜日',
    '水曜日',
    '木曜日',
    '金曜日',
    '土曜日',
  ];
  // add0()方法在后面定义
  return {
    date: `${month}月${date}日`,
    day: dayStrArr[day],
    time: `${add0(hour)}:${add0(minute)}`,
  };
};

const tempFormat = (temp) => {
  return Math.round(temp);
};

const windFormat = (degree) => {
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
  const windType = Math.trunc(((degree + 22.5) % 360) / 45);
  return {
    windName: windNames[windType],
    windIcon: `wind-${windType}`,
  };
};

const descriptionToJ = (main, description) => {
  if (mapE2J.has(description)) {
    return mapE2J.get(description);
  } else {
    return mapMainWeather.get(main);
  }
};

const getWeatherIcon = (main, description) => {
  if (mapIcons.has(description)) {
    return mapIcons.get(description);
  } else {
    return mapMainIcons.get(main);
  }
};

export default {
  dateFormat,
  dayAndDateFormat,
  tempFormat,
  windFormat,
  descriptionToJ,
  getWeatherIcon,
};
