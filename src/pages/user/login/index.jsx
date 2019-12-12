import React from 'react';
import { Form, Button, Input, Icon } from 'antd'
import style from './style.less'
import { login } from '@/services/user';
import router from 'umi/router';
import { openNotificationWithIcon } from '@/utils/methods';

const Login = ({ form: { getFieldDecorator, validateFields } }) => {
  const handleLog = () => {
    validateFields((err, values) => {
      if (!err) {
        login(values).then(r => {
          if (r.code === 0) {
            openNotificationWithIcon('success', r.msg)
            window.localStorage.setItem('token', r.data.token)
            router.push('/dashboard')
          }
        })
      }
    });
  }
  return (
    <div className={style.logWrapper}>
      <Form >
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名！' }],
          })(
            <Input
              style={{ width: 300 }}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码！' }],
          })(
            <Input
              style={{ width: 300 }}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button style={{ width: 300 }} type="primary" onClick={handleLog}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Form.create({})(Login)
