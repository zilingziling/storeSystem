import React, { Component, useState } from 'react';
import { Button, Input } from 'antd';
import { openNotificationWithIcon } from '@/utils/methods';
import {pushM} from "@/services/common";

const { TextArea } = Input;
const PushMessage = () => {
  const [value, setValue] = useState('')
  const handleInput = e => {
    setValue(e.target.value)
  }
  const pushMessage = () => {
    pushM({
      content: value,
    }).then(r => {
      if (r.code === 0) {
        openNotificationWithIcon('success', r.msg)
        setValue('')
      }
    })
  }
  return (
    <div>
      <TextArea onChange={handleInput} value={value} rows={4} style={{ marginBottom: '1rem' }}/>
      <Button onClick={pushMessage} type="primary" style={{ float: 'right' }}>推送</Button>
    </div>
  )
}

export default PushMessage;
