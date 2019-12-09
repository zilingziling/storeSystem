import { notification } from 'antd';

export const getUrlParams = field => {
  // 不传name返回所有值，否则返回对应值
  let url = window.location.search;
  if (url.indexOf('?') == 1) {
    return false;
  }
  url = url.substr(1);
  url = url.split('&');
  const name = field || '';
  let nameres;
  // 获取全部参数及其值
  for (let i = 0; i < url.length; i++) {
    const info = url[i].split('=');
    const obj = {};
    obj[info[0]] = decodeURI(info[1]);
    url[i] = obj;
  }
  // 如果传入一个参数名称，就匹配其值
  if (name) {
    for (let i = 0; i < url.length; i++) {
      for (const key in url[i]) {
        if (key == name) {
          nameres = url[i][key];
        }
      }
    }
  } else {
    nameres = url;
  }
  // 返回结果
  return nameres;
};
export const openNotificationWithIcon = (type, msg) => {
  notification[type]({
    message: type === 'success' ? '操作成功' : '操作失败',
    description: type === 'error' ? msg : '',
  });
};
