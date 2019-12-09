import React from 'react';
import { Icon } from 'antd';
import style from './index.less';

const Notice = ({ text }) => (
  <div className={style.notice}>
    <Icon type="sound" />
    <span>{text}</span>
  </div>
);
export default Notice;
