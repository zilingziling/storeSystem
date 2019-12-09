import React, { Component } from 'react';
import { Button, Input, Table } from 'antd';
import styles from '../index.less'

const columns = [
  {
    title: 'ID',
  },
  {
    title: '申请用户',
  },
  {
    title: '手机号',
  },
  {
    title: 'QQ号',
  },
  {
    title: '微信号',
  },
  {
    title: '开通',
  },
]
const StoreApply = () => (
  <div>
    <div className={styles.flex}>
      <Input className={styles.customInput} placeholder="输入货号"/>
      <Button type="primary">搜索</Button>
    </div>
    <Table bordered columns={columns}/>
  </div>
)

export default StoreApply;
