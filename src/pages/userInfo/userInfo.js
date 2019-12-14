import React, { useEffect, useState } from 'react';
import { Button, Input, Table, Icon } from 'antd';
import { connect } from 'dva';
import moment from 'moment';
import styles from '../index.less'
import { openNotificationWithIcon } from '@/utils/methods';
import { delUser } from '@/services/common';


const UserInfo = ({ dispatch, user: { total, list } }) => {
  const [current, setCur] = useState(1)
  const [pageSize, setSize] = useState(10)
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
      title: '头像',
      dataIndex: 'img',
      render: text => <img src={text} className={styles.header}/>,
    },
    {
      title: '登录时间',
      dataIndex: 'loginTime',
      render: text => moment(text).format('YYYY-HH-DD'),
    },
    {
      title: '注册时间',
      dataIndex: 'createTime',
      render: text => moment(text).format('YYYY-HH-DD'),
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
      },
    })
  }
  useEffect(() => {
    init()
  }, [current])
  const handleTableChange = pagination => {
    setCur(pagination.current)
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
  return (
    <div>
      {/*<div className={styles.flex}>*/}
      {/*  <Input className={styles.customInput} placeholder="输入货号"/>*/}
      {/*  <Button type="primary">搜索</Button>*/}
      {/*</div>*/}
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
