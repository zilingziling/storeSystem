import React, { Component, useEffect, useState } from 'react';
import DataCards from '@/components/DataCards/dataCards';
import styles from './index.less';
import { getIndex } from '@/services/dashboard';

const cardAry = {
  allUser: {
    title: '总用户数',
    value: '',
  },
  allInventory: {
    title: '总库存数',
    value: '',
  },
  webInventory: {
    title: '网页仓库',
    value: '',
  },
  todayRegister: {
    title: '今日注册',
    value: '',
  },
  todayLogin: {
    title: '今日登录',
    value: '',
  },
};
const Dashboard = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    getIndex().then(r => {
      if (r.code === 0) {
        const ary = cardAry;
        for (const key in ary) {
          ary[key].value = r.data[key];
        }
        setData(ary)
      }
    });
  }, []);
  return (
    <div className={styles.cards}>
      {Object.values(data).map((i, index) => (
        <DataCards item={i} key={index} />
      ))}
    </div>
  );
};
export default Dashboard;
