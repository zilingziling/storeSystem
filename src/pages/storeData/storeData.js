import React, { Component } from 'react';
import { Button, Input, Table } from 'antd';
import styles from '../index.less'

const columns = [
  {
    title: 'ID',
  },
  {
    title: '用户名',
  },
  {
    title: '手机号',
  },
  {
    title: '商品数',
  },
  {
    title: '库存数',
  },
  {
    title: '查询',
  },
]
const StoreData = () => (
  <div>
    <div className={styles.flex}>
      <Input className={styles.customInput} placeholder="输入货号"/>
      <Button type="primary">搜索</Button>
    </div>
    <Table bordered columns={columns}/>
  </div>
)

export default StoreData;
