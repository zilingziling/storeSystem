import React, { Component, useEffect, useState } from 'react';
import { Button, Icon, Input, Table, Switch } from 'antd';
import { connect } from 'dva';
import styles from '../index.less'
import { openNotificationWithIcon } from '@/utils/methods';
import { delGoods, switchHot } from '@/services/common';


const GoodsInfo = ({ dispatch, goods: { total, list } }) => {
  const [current, setCur] = useState(1)
  const [pageSize, setSize] = useState(10)
  const [shoeName, setShoeName] = useState('')
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '图片',
      dataIndex: 'img',
      render: text => <img src={text} className={styles.goods}/>,
    },
    {
      title: '名称',
      dataIndex: 'shoeName',
    },
    {
      title: '货号',
      dataIndex: 'shoeNum',
    },
    {
      title: '颜色',
      dataIndex: 'corlor',
    },
    {
      title: '发售日期',
      dataIndex: 'creatTime',

    },
    {
      title: '热门',
      dataIndex: 'shoeHot',
      render: (text, record) => <Switch onChange={() => hotSwitch(record)} defaultChecked={text === 0 ? false : text === 1 ? true : ''}/>,
    },
    {
      title: '操作',
      render: (text, record) => <Icon onClick={() => onDelGoods(record.shoeNum)} type="delete" className={styles.icon}/>,

    },
  ]
  const init = () => {
    dispatch({
      type: 'common/getGoods',
      p: {
        pageIndex: current,
        pageSize,
        shoeName,
      },
    })
  }
  const hotSwitch = record => {
    switchHot({
      shoeNum: record.shoeNum,
      hot: record.shoeHot === 0 ? 1 : record.shoeHot === 1 ? 0 : '',
    }).then(r => {
      if (r.code === 0) {
        openNotificationWithIcon('success', r.msg)
        init()
      }
    })
  }

  const onDelGoods = shoeNum => {
    delGoods(shoeNum).then(r => {
      if (r.code === 0) {
        openNotificationWithIcon('success', r.msg)
        init()
      }
    })
  }
  useEffect(() => {
    init()
  }, [current, shoeName])
  const handleTableChange = pagination => {
    setCur(pagination.current)
  }
  const pagination = {
    total, pageSize, current,
  }
  const inputSearch = e => {
    setShoeName(e.target.value)
  }
  const handleSearch = () => {
    setCur(1)
  }
  return (
    <div>
      <div className={styles.flex}>
        <Input value={shoeName} onChange={inputSearch} className={styles.customInput} placeholder="输入货号"/>
        <Button type="primary" onClick={handleSearch}>搜索</Button>
      </div>
      <Table
        pagination={pagination}
        bordered columns={columns}
        dataSource={list} rowKey="id" onChange={handleTableChange}/>
    </div>
  )
}
export default connect(({ common }) => ({
  goods: common.goods,
}))(GoodsInfo);
