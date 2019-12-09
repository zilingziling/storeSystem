import React from 'react';
import style from './index.less';
import { Button } from 'antd';

const CustomButton = ({ text, type }) => (
  <Button className={style.customBtn} style={{ backgroundColor: type }}>
    <span>{text}</span>
  </Button>
);

export default CustomButton;
