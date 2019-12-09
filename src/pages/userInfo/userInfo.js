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
    title: '头像',
  },
  {
    title: '登录时间',
  },
  {
    title: '注册时间',
  },
  {
    title: '网页仓库开通',
  },
  {
    title: '操作',
  },
]
const UserInfo = () => (
  <div>
    <div className={styles.flex}>
      <Input className={styles.customInput} placeholder="输入货号"/>
      <Button type="primary">搜索</Button>
    </div>
    <Table bordered columns={columns}/>
  </div>
)

export default UserInfo;
