import React, { Component, useEffect, useState } from 'react';
import { Button, Icon, Input, Modal, Table } from 'antd';
import { connect } from 'dva';
import styles from '../index.less'
import { getModal } from '@/services/common';


const StoreData = ({ dispatch, storeData: { total, list } }) => {
  const [current, setCur] = useState(1)
  const [pageSize, setSize] = useState(10)
  const [visible, setV] = useState(false)
  const [modalData, setModal] = useState([])
  const columns = [
    {
      title: 'ID',
      dataIndex: 'userId',
    },
    {
      title: '用户名',
      dataIndex: 'userName',
    },
    {
      title: '手机号',
      dataIndex: 'phoneNum',
    },
    {
      title: '商品数',
      dataIndex: 'shoeCount',
    },
    {
      title: '库存数',
      dataIndex: 'resultNum',
    },
    {
      title: '查询',
      render: (text, record) => <Icon onClick={() => clickSearch(record.userId)} type="search" className={styles.icon}/>,
    },
  ]
  const init = () => {
    dispatch({
      type: 'common/getStoreData',
      p: {
        pageIndex: current,
        pageSize,
      },
    })
  }
  const clickSearch = userId => {
    setV(true)
    getModal({
      pageSize: 1000000,
      pageIndex: 1,
      userId,
    }).then(r => {
      if (r.code === 0) {
        setModal(r.data.list)
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
      <Modal width={1000} footer={null} title={null} visible={visible} onCancel={() => setV(false)}>
        <Table  columns={modalColumn} rowKey="id" dataSource={modalData}/>
      </Modal>
      <Table
        pagination={pagination}
        bordered columns={columns}
        dataSource={list} rowKey="userId" onChange={handleTableChange}
      />
    </div>
  )
}
export default connect(({ common }) => ({
  storeData: common.storeData,
}))(StoreData);
const modalColumn = [
  {
    title: 'ID',
    dataIndex: 'id',
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
    title: '尺码',
    dataIndex: 'size',
  },
  {
    title: '数量',
    dataIndex: 'resultNum',
  },
  {
    title: '入库价格',
    dataIndex: 'inPrice',
    render:text=>text/100
  },
]
