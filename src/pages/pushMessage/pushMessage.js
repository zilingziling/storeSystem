import React, { Component } from 'react';
import { Button, Input } from 'antd';

const { TextArea } = Input;
const PushMessage = () => (
      <div>
        <TextArea rows={4} style={{ marginBottom: '1rem' }}/>
        <Button type="primary" style={{ float: 'right' }}>推送</Button>
      </div>
    )

export default PushMessage;
