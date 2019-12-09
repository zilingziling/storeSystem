import React, { Component } from 'react';
import { Button, Input, Table } from 'antd';
import styles from '../index.less'

const columns = [
  {
    title: 'ID',
  },
  {
    title: '图片',
  },
  {
    title: '名称',
  },
  {
    title: '货号',
  },
  {
    title: '颜色',
  },
  {
    title: '发售日期',
  },
  {
    title: '热门',
  },
  {
    title: '操作',
  },
]
const GoodsInfo = () => (
      <div>
        <div className={styles.flex}>
          <Input className={styles.customInput} placeholder="输入货号"/>
          <Button type="primary">搜索</Button>
        </div>
        <Table bordered columns={columns}/>
      </div>
    )

export default GoodsInfo;
