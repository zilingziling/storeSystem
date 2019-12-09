import { Breadcrumb, Tooltip } from 'antd';
import React from 'react';
import { connect } from 'dva';
import styles from './index.less';

const GlobalHeaderRight = props => {
  const {
    theme,
    layout,
    location: { pathname },
  } = props;
  const getPage = () => {
    switch (pathname) {
      case '/dashboard':
        return '首页';
      case '/goodsInfo':
        return '商品信息';
      case '/userInfo':
        return '用户信息';
      case '/storeData':
        return '仓库数据';
      case '/pushMessage':
        return '消息推送';
      case '/storeApply':
        return '网页仓库申请';
    }
  };
  let className = styles.right;
  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={styles.headerWrap}>
      <h1 className={styles.bread}>{getPage()}</h1>
      <div className={styles.user}>
        <img alt="avatar" src={require('@/assets/1024.jpg')} />
        <span>之林</span>
        <img alt="level" src={require('@/assets/v3.png')} />
      </div>
    </div>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
