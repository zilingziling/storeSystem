import React, { useEffect, useState } from 'react';
import { Button, Input, Table, Icon } from 'antd';
import { connect } from 'dva';
import styles from '../index.less'
import { openNotificationWithIcon } from '@/utils/methods';
import { delUser } from '@/services/common';


const UserInfo = ({ dispatch, user: { total, list } }) => {
  const [current, setCur] = useState(Number(window.localStorage.getItem('userPage')) || 1)
  const [pageSize, setSize] = useState(10)
  const [userName, setUserName] = useState('')
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
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
      title: '微信号',
      dataIndex: 'wxNum',
    },
    {
      title: '头像',
      dataIndex: 'img',
      render: text => (text ? <img src={text} className={styles.header}/> : '暂无'),
    },
    {
      title: '登录时间',
      dataIndex: 'loginTime',
    },
    {
      title: '注册时间',
      dataIndex: 'createTime',
    },
    {
      title: '网页仓库开通',
      dataIndex: 'openWeb',
      render: text => (text === 0 ? '未开通' : text === 1 ? '已开通' : text === -1 ? '开通中' : ''),
    },
    {
      title: '操作',
      render: (text, record) => <Icon onClick={() => onDelUser(record.id)} type="delete" className={styles.icon}/>,
    },
  ]
  const init = () => {
    dispatch({
      type: 'common/getUser',
      p: {
        pageIndex: current,
        pageSize,
        name: userName,
      },
    })
  }
  useEffect(() => {
    init()
  }, [current, userName])
  const handleTableChange = pagination => {
    setCur(pagination.current)
    window.localStorage.setItem('userPage', pagination.current)
  }
  const onDelUser = id => {
    delUser(id).then(r => {
      if (r.code === 0) {
        openNotificationWithIcon('success', r.msg)
        init()
      }
    })
  }
  const pagination = {
    total, pageSize, current,
  }
  const inputSearch = e => {
    setUserName(e.target.value)
  }
  const handleSearch = () => {
    setCur(1)
    window.localStorage.setItem('userPage', 1)
  }
  return (
    <div>
      <div className={styles.flex}>
        <Input value={userName} className={styles.customInput} onChange={inputSearch} placeholder="输入手机号/用户名"/>
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
  user: common.user,
}))(UserInfo);
