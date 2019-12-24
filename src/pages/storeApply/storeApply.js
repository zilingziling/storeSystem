import React, { Component, useEffect, useState } from 'react';
import { Button, Input, Table, Switch, Divider } from 'antd';
import { connect } from 'dva';
import styles from '../index.less'
import { openNotificationWithIcon } from '@/utils/methods';
import { openStore } from '@/services/common';


const StoreApply = ({ dispatch, storeApply: { total, list } }) => {
  const [current, setCur] = useState(1)
  const [pageSize, setSize] = useState(10)
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '申请用户',
      dataIndex: 'userName',
    },
    {
      title: '手机号',
      dataIndex: 'phoneNum',
    },
    {
      title: 'QQ号',
      dataIndex: 'qq',
      render: text => text || '暂无',
    },
    {
      title: '微信号',
      dataIndex: 'wxNum',
    },
    {
      title: '开通',
      render: (text, record) => <><a onClick={() => openSwitch(record.id, 1)}>开通</a><Divider type="vertical"/><a onClick={() => openSwitch(record.id, 0)}>拒绝</a></>,
    },
  ]
  const init = () => {
    dispatch({
      type: 'common/getStoreApply',
      p: {
        pageIndex: current,
        pageSize,
      },
    })
  }
  const openSwitch = (id,mark) => {
    openStore({
      userId: id,
      check: mark,
    }).then(r => {
      if (r.code === 0) {
        openNotificationWithIcon('success', r.msg)
        init()
      }
    })
  }


  useEffect(() => {
    init()
  }, [current])
  const handleTableChange = pagination => {
    setCur(pagination.current)
  }
  const pagination = {
    total, pageSize, current,
  }
  return (
    <div>
      {/* <div className={styles.flex}> */}
      {/*  <Input className={styles.customInput} placeholder="输入货号"/> */}
      {/*  <Button type="primary">搜索</Button> */}
      {/* </div> */}
      <Table pagination={pagination}
             bordered columns={columns}
             dataSource={list} rowKey="id" onChange={handleTableChange}/>
    </div>
  )
}
export default connect(({ common }) => ({
  storeApply: common.storeApply,
}))(StoreApply);
