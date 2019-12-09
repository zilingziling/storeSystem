import React, { Component } from 'react';
import DataCards from '@/components/DataCards/dataCards';
import styles from './index.less'
const cardAry = ['总用户数', '总库存数', '网页仓库', '今日注册', '今日登录']
const Dashboard = () => (
      <div className={styles.cards}>
        {
          cardAry.map(i => <DataCards titie={i} key={i}/>,
          )
        }
      </div>
    )

export default Dashboard;
