import { notification } from 'antd';

export const openNotificationWithIcon = (type, msg) => {
  notification[type]({
    message: type === 'success' ? '操作成功' : '操作失败',
    description: type === 'error' ? msg : '',
  });
};
